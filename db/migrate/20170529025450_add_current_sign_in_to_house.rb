class AddCurrentSignInToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :current_sign_in_at, :datetime
    add_column :houses, :reset_password_token, :string
    add_column :houses, :reset_password_sent_at, :datetime
    add_column :houses, :remember_created_at, :datetime
    add_column :houses, :sign_in_count, :integer
    add_column :houses, :last_sign_in_at, :datetime
  end
end
