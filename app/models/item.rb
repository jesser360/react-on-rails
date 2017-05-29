class Item < ApplicationRecord
  belongs_to :payment, optional: true

end
