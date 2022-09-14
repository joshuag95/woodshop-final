class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :inventory, :description, :price, :image
end
