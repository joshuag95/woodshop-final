class Cart < ApplicationRecord
    belongs_to :user
    has_many :cart_products
    has_many :products, through: :cart_products

    def sum_total
        prices = self.cart_products.map{|p| p.product.price}
        prices.sum
    end

    def add_item(product_id)
        self.cart_products << CartProduct.new(product_id: product_id)
        self.save
    end
    
end
