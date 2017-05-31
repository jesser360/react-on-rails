class AddItemToPayments < ActiveRecord::Migration[5.1]
  def change
    add_column :payments, :item, :string
    add_column :payments, :payer, :string
    add_column :payments, :in_debter, :string
  end
end
