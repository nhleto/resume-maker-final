class Api::V1::HeadersController < ApplicationController
  def create
    @resume = Resume.find(params[:id])
    @header = @resume.headers.build
    if @header.save
      render json: @header, status: :created, location: api_v1_resume_header_url(@header)
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end
end
