Rails.application.routes.draw do
  root 'pages#index'
  resources :products, only: [:index, :show, :create, :update]
  devise_for :users

  resources :users, only:[:index]
  resources :customers, only: [:index, :show, :create, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
