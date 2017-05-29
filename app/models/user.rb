class User < ApplicationRecord
  belongs_to :house
  belongs_to :payment, optional: true
end
