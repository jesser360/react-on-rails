class Payment < ApplicationRecord
  belongs_to :item, :class_name => 'Item'
  belongs_to :payer, :class_name => 'User'
  belongs_to :in_debter, :class_name => 'User'
  belongs_to :house
end
