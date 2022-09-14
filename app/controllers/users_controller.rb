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
end
