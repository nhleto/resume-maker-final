class Api::V1::EducationsController < ApplicationController
  def create
    @resume = Resume.find(params[:id])
    @education = @resume.educations.build(education_params)
  end
end
