class Api::V1::ResumesController < ApplicationController
  before_action :set_resume, only: %i[show update destroy]

  # GET /resumes
  # GET /resumes.json
  def index
    @resumes = Resume.all
    render json: @resumes, include: %i[headers educations work_experiences skills]
  end

  # GET /resumes/1
  # GET /resumes/1.json
  def show; end

  # POST /resumes
  # POST /resumes.json
  def create
    # puts "params: #{params}"
    @resume = Resume.new(resume_params)
    header_build(@resume)
    education_build(@resume)
    work_experience_build(@resume)
    skills_build(@resume)
    if @resume.save
      render json: @resume, status: :created, location: api_v1_resumes_url(@resume)
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /resumes/1
  # PATCH/PUT /resumes/1.json
  def update
    if @resume.update(resume_params)
      render :show, status: :ok, location: @resume
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end

  # DELETE /resumes/1
  # DELETE /resumes/1.json
  def destroy
    @resume.destroy
  end

  private

  def skills_build(resume)
    resume.skills.build(
      name: params[:skills][0]
    )
  end

  def education_build(resume)
    daterange = "#{params[:education][2]}, #{params[:education][3]})"
    resume.educations.build(
      school_name: params[:education][0],
      major: params[:education][1],
      study_length: daterange,
      gpa: params[:education][-1]
    )
  end

  def work_experience_build(resume)
    daterange = "#{params[:work_experience][3]}, #{params[:work_experience][4]})"
    resume.work_experiences.build(
      company_name: params[:work_experience][0],
      title: params[:work_experience][1],
      responsibilites: params[:work_experience][2],
      employment_length: daterange
    )
  end

  def header_build(resume)
    # byebug
    resume.headers.build(
      name: params[:resume][:headers][:name],
      phone: params[:resume][:headers][:phone],
      location: params[:resume][:headers][:location],
      website: params[:resume][:headers][:website],
      email: params[:resume][:headers][:email]
    )
  end

  # Only allow a list of trusted parameters through.
  def resume_params
    # byebug
    # json_params = ActionController::Parameters.new(JSON.parse(params))
    params.permit(:resume, headers: %i[name phone email location website])
  end
end
