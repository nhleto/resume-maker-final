class Resume < ApplicationRecord
  has_many :headers
  has_many :educations
  has_many :work_experiences
  has_many :skills
end
