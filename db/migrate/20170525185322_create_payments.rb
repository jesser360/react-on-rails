class CreatePayments < ActiveRecord::Migration[5.1]
  def change
    create_table :payments do |t|
      t.belongs_to :item, :class_name => 'Item'
      t.belongs_to :payer, :class_name => 'User'
      t.belongs_to :in_debter, :class_name => 'User'
      t.timestamps
    end
  end
end
