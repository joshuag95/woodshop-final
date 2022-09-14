class CartSerializer < ActiveModel::Serializer
  attributes :id, :confirmed
  has_one :client
end
