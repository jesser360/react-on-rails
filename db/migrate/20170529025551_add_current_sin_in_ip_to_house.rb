class AddCurrentSinInIpToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :current_sign_in_ip, :inet
    add_column :houses, :last_sign_in_ip, :inet
  end
end
