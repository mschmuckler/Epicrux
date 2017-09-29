class SeizuresController < ApplicationController
  def create
    @seizure = Seizure.new(seizure_params)
    @seizure.user_id = current_user.id
    if @seizure.save
      render :show
    else
      @errors = @seizure.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def show
    @seizure = Seizure.find(params[:id])
    render :show
  end

  private
  def seizure_params
    params.require(:seizure).permit(
      :date,
      :start_time,
      :duration,
      :category,
      triggers: [],
      descriptions: [],
      post_events: [],
      :custom_comment
    )
  end
end
