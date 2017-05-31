class AddPasswordToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :encrypted_password, :string
  end
end
