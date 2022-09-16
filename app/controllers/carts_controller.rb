class CartsController < ApplicationController
    def index 
        carts = Cart.all
        render json: carts
    end

    def show
        if current_cart
            render json: current_cart
        else
            render json: "no current session stored", status: :unauthorized
        end
    end

    def confirm_cart
        cart = Cart.find_by(id: params[:id])
        cart.update(confirmed: true)
        render json: cart, status: :accepted
    end
    
    def display_sum
        cart = Cart.find_by(id: params[:id])
        render json: cart.sum_total, status: :ok
    end

    def add_to_cart
        current_cart.add_item(params[:product_id])
        # redirect to shopping cart or whereever
    end
      

end
