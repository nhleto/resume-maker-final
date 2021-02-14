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
    @resume = Resume.new(resume_params)
    @resume.headers.build(name: params[:header][0])
    @resume.educations.build
    @resume.work_experiences.build
    @resume.skills.build
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

  # Use callbacks to share common setup or constraints between actions.
  def set_resume
    @resume = Resume.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def resume_params
    params.fetch(:resume, {}).permit(:name)
  #   params.require(:resume).permit(:name, headers_attributes: %i[resume_id name phone email website location],
  #                                             work_experiences_attributes: %i[resume_id company_name title responsibilites employment_length],
  #                                             educations_attributes: %i[resume_id school_name major gpa study_length],
  #                                             skills_attributes: %i[resume_id id name])
  end
end
