class AddFieldsToSchema < ActiveRecord::Migration[6.0]
  def change
    add_column :headers, :name, :string
    add_column :headers, :phone, :integer
    add_column :headers, :location, :string
    add_column :headers, :website, :string
    add_column :headers, :email, :string

    add_column :educations, :school_name, :string
    add_column :educations, :major, :string
    add_column :educations, :study_length, :daterange
    add_column :educations, :gpa, :integer

    add_column :work_experiences, :company_name, :string
    add_column :work_experiences, :title, :string
    add_column :work_experiences, :responsibilites, :text
    add_column :work_experiences, :employment_length, :daterange

    add_column :skills, :name, :string
  end
end
