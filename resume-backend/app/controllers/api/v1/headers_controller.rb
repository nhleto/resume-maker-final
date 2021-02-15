class Api::V1::HeadersController < ApplicationController
  def new
    @header = Header.new
  end

  def create
    @header = Header.new(resume_id: params[:resume_id])
    if @header.save
      render json: @header, status: :created, location: api_v1_resume_header_url(@header)
    else
      render json: @resume.errors, status: :unprocessable_entity
    end
  end
end 
