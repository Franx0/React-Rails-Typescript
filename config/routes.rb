require "./lib/api/version"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'app#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    scope module: :v1, constraints: ApiVersion.new('v1', true) do
      get '/history', to: 'histories#index'
      post '/calc', to: 'histories#create'
    end
  end
end
