class Resume < ApplicationRecord
  has_one :header
  has_many :educations
  has_many :work_experiences
  has_many :skills
end
