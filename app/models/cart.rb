class Cart < ApplicationRecord
  belongs_to :client
  has_many :cart_products
  has_many :products, through: :cart_products

  def sum_total
    prices = self.cart_products.map{|p| p.product.price}
    prices.sum
  end
end
