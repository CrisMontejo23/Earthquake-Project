Rails.application.routes.draw do
  namespace :api do
    resources :features do
      resources :comments, only: [:create]
    end
  end
end