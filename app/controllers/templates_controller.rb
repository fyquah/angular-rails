class TemplatesController < ApplicationController
  def template
    render "templates/#{params[:path]}" , :layout => false
  end

  def index
    render "/index"
  end
end