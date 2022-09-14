class UsersController < ApplicationController
    def index 
        users = User.all
        render json: users
    end

    def show
        if current_user
            render json: current_user
        else
            render json: "no current session stored", status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
            render json: user, status: :ok
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
      end

    def user_params
        params.permit(:name, :email, :phone, :address, :password, :password_confirmation)
    end

end
