Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :resumes do
        resources :header
        resources :educations
        resources :work_experiences
        resources :skills
      end
    end
  end
end
