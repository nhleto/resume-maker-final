class Api::V1::ResumesController < ApplicationController
  before_action :set_resume, only: %i[show update destroy]

  # GET /resumes
  # GET /resumes.json
  def index
    @resumes = Resume.all
    render json: @resumes, include: [:skills]
  end

  # GET /resumes/1
  # GET /resumes/1.json
  def show; end

  # POST /resumes
  # POST /resumes.json
  def create
    @resume = Resume.new(resume_params)

    if @resume.save
      render json: @resume, status: :created, location: @resume
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
    params.fetch(:resume, {}).permit(:id)
  end
end
