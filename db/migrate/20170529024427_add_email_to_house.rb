class AddEmailToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :email, :string
  end
end
