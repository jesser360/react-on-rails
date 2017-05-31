Rails.application.routes.draw do

root to: 'site#index'

namespace :api do
  namespace :v1 do
    resources :items, only: [:index, :create, :destroy, :update]
   end
  end


namespace :api do
  namespace :v1 do
    resources :users, only: [:index, :create, :destroy, :update]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :payments, only: [:index, :create, :destroy, :update]
      end
    end


  devise_for :houses do
root 'site#index'
resources :houses
  end
end
