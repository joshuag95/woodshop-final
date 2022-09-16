class CartSerializer < ActiveModel::Serializer
  attributes :id, :confirmed
  has_one :user

  has_many :products, through: :cart_products
end
