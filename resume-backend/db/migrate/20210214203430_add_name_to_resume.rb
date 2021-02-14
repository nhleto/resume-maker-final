class AddNameToResume < ActiveRecord::Migration[6.0]
  def change
    add_column :resumes, :name, :string
  end
end
