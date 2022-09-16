class CartProductsController < ApplicationController

    def create
       cartproduct = CartProduct.create(cart_id: params[:cart_id], product_id: params[:product_id])
       render json: cartproduct, status: :created
    end
end
