require "./lib/api/version"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    scope module: :v1, constraints: ApiVersion.new('v1', true) do
      get '/history', to: 'histories#index'
      post '/calc', to: 'histories#create'
    end
  end

  # React App routes
  root 'app#index'

  # Redirect missing routes to react client, always at bottom of file
  match '*path', to: 'app#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
