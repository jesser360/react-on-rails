class RemoveNotesFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :notes, :text
  end
end
