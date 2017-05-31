class AddHouseReferenceToPayments < ActiveRecord::Migration[5.1]
  def change
    add_reference :payments, :house, foreign_key: true
  end
end
