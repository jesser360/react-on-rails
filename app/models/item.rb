class Item < ApplicationRecord
  belongs_to :payment, optional: true
  belongs_to :house

end
