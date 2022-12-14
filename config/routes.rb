Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :cart_products
  resources :carts
  resources :products
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me/carts", to: "carts#show"
  post '/add_to_cart/:product_id' => 'cart#add_to_cart', :as => 'add_to_cart'
end
