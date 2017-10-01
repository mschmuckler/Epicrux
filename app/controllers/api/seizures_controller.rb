class Api::SeizuresController < ApplicationController
  def create
    @seizure = Seizure.new(seizure_params)
    @seizure.user_id = current_user.id
    if @seizure.save
      render :show
    else
      @errors = @seizure.errors.full_messages
      render json: ["Date & Time can't be blank"], status: 422
    end
  end

  def show
    @seizure = Seizure.find(params[:id])
    render :show
  end

  def index
    @seizures = Seizure.where(user_id: current_user.id)
    render :index
  end

  private
  def seizure_params
    params.require(:seizure).permit(
      :date,
      :duration,
      :category,
      :custom_comment,
      triggers: [],
      descriptions: [],
      post_events: [],
    )
  end
end
