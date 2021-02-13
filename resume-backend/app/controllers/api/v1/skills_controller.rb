class Api::V1::SkillsController < 
  def create
    @resume = Resume.find(params[:id])
    @skill = @resume.skills.build(skills_params)

    if @skill.save
      render json: @skill
    else
      render json: @skill.errors
    end
  end

  private

  def skills_params
    params.fetch(:skills, {}).permit(:resume_id, skill_attributes: [:name])
  end
end
