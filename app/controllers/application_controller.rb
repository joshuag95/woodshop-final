class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def current_user
      User.find_by(id: session[:user_id])
    end
    
    def current_cart
      Cart.find_by(user_id: session[:user_id])
    end

  private
    def render_unprocessable_entity_response(invalid)
          render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_404(invalid)
          render json: {errors: invalid.record.errors.full_messages}, status: 404
    end


  
end
