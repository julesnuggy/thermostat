require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  get "/" do
    @temp = session[:temp] || "Current temp: 20C"
    erb :index
  end

  get "/temp" do
    @temp = session[:temp]
    #content_type :json
    #{ temp: temp, psm: psm }.to_json
  end

  post "/temp" do
    session[:temp] = params[:temp]
    #session[:psm] = params[:psm]
  end

  run! if app_file == $0
end
