class House < ApplicationRecord
  has_many :users
  has_many :items
  has_many :payments
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
