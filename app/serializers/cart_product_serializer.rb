class CartProductSerializer < ActiveModel::Serializer
  attributes :id
  has_one :cart
  has_one :product
end
