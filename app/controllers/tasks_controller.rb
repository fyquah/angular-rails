class TasksController < ApplicationController
  def index
    tasks = Task.all
    render :json => tasks , :status => 200
  end

  def show
    task = Task.find(params[:id])
    render :json => task , :status => 200
  end

  def create
    task = task.create! tasks_params
    render :json => task , :status => 201
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes tasks_params
    render :json => task , :status => 200
  end

  def destroy
    Task.find(params[:id]).destroy!
    render :nothing => true , :status => 204 # 204 means no contents
  end

  private
    def tasks_params
      params.require(:tasks).permit :name , :description
    end
end
