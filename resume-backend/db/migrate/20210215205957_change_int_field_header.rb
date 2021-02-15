class ChangeIntFieldHeader < ActiveRecord::Migration[6.0]
  def change
    change_column :headers, :phone, :bigint
  end
end
