class AddTotalDebtToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :total_debt, :integer
  end
end
