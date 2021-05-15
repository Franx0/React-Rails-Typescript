module Api::V1
  class HistoriesController < BaseController
    def index
      render json: { data: History.all }
    end

    def create
      @history = HistoryCreator.call(permitted_params)

      if @history.errors.any?
        render json: { errors: @history.errors.messages }, status: :unprocessable_entity
      else
        render json: { data: @history.calc }, status: :created
      end
    end

    private

    def permitted_params
      params.require(:history).permit(:typed, :data => [])
    end
  end
end
