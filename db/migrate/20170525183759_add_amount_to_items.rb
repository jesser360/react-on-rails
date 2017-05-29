class AddAmountToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :amount, :integer
    add_column :items, :is_paid, :boolean
    add_column :items, :notes, :text
  end
end
