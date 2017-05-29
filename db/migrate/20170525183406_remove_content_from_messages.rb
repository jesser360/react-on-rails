class RemoveContentFromMessages < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :content, :string
    remove_column :messages, :user_id, :integer
    remove_column :messages, :product_id, :integer
  end
end
