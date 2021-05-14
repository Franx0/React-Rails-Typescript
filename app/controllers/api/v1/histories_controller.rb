module Api::V1
  class HistoriesController < BaseController
    def index
      render json: History.all
    end

    def create
      @history = HistoryCreator.call(permitted_params)
      render json: @history
    end

    private

    def permitted_params
      params.require(:history).permit(:data, :type)
    end
  end
end
