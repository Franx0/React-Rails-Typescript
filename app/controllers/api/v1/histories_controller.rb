module Api::V1
  class HistoriesController < BaseController
    def index
      render json: { data: formatted_response(History.all) }
    end

    def create
      @history = HistoryCreator.call(permitted_params)

      if @history.errors.any?
        render json: { errors: @history.errors.messages }, status: :unprocessable_entity
      else
        render json: { data: formatted_response(@history) }, status: :created
      end
    end

    private

    def permitted_params
      params.require(:history).permit(:typed, :data => [])
    end

    def formatted_response(data)
      res = lambda { |history| { history: history, calculation: history.calc } }

      if (data.is_a? ActiveRecord::Relation)
        data.map{|h| res.call(h)}
      else
        res.call(data)
      end
    end
  end
end
