class PagesController < ApplicationController
  
  def index
    @name = "dodol Jawa"
  end
  
  def search
    p "----- #{params[:q]}"
  end
end