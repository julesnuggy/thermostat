 require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  get "/memory" do
    temp = session[:temp] || 20

    content_type :json
    { temp: temp }.to_json
  end

  post "/memory" do
    session[:temp] = params[:temp]
    #session[:psm] = params[:psm]
  end

  run! if app_file == $0
end
