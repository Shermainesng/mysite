Rails.application.routes.draw do
  root to: 'pages#home'

  get '/about', to: 'pages#home'

  get '/myworks', to: 'pages#home'

  get '/contact', to: 'pages#home'
  get '/blog', to: 'pages#home'
end
