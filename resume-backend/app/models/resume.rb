class Resume < ApplicationRecord
  has_many :headers, dependent: :destroy
  has_many :educations, dependent: :destroy
  has_many :work_experiences, dependent: :destroy
  has_many :skills, dependent: :destroy

  accepts_nested_attributes_for :headers, :educations, :work_experiences, :skills
end
