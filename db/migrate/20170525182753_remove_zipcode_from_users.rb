class RemoveZipcodeFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :zipcode, :integer
    remove_column :users, :password_digest, :string
    remove_column :users, :username, :string
    remove_column :users, :state, :string
    remove_column :users, :country, :string
    remove_column :users, :apartment, :string
  end
end
