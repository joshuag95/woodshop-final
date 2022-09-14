class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email, :password_digest
end
