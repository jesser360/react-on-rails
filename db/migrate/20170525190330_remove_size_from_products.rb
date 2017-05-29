class RemoveSizeFromProducts < ActiveRecord::Migration[5.1]
  def change
    remove_column :products, :size, :string
    remove_column :products, :materials, :string
    remove_column :products, :custom, :boolean
    remove_column :products, :created_at, :datetime
    remove_column :products, :updated_at, :datetime
  end
end
