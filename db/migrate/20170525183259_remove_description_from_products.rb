class RemoveDescriptionFromProducts < ActiveRecord::Migration[5.1]
  def change
    remove_column :products, :description, :text
    remove_column :products, :image, :string
    remove_column :products, :title, :string
    remove_column :products, :group, :string
  end
end
