class TemplatesController < ApplicationController
  def template
    render params[:path] , :layout => false
  end

  def index
    render "/index"
  end
end