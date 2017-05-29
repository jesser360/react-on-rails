class RemoveCreatedAtFromMessages < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :created_at, :datetime
    remove_column :messages, :updated_at, :datetime
  end
end
