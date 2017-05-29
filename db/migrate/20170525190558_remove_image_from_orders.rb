class RemoveImageFromOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :user_id, :integer
    remove_column :orders, :items, :string
    remove_column :orders, :amount, :integer
    remove_column :orders, :image, :string
    remove_column :orders, :is_bought, :boolean
    remove_column :orders, :quantity, :integer
    remove_column :orders, :created_at, :datetime
    remove_column :orders, :updated_at, :datetime
  end
end
