class HistoryCreator < ApplicationService
  def initialize(params)
    @params = params.as_json.deep_symbolize_keys
  end

  def call
    @history = History.new(typed: @params[:typed])
    @history.data = formalize_data(@params[:data])
    @history.save

    return @history
  end

  private

  def formalize_data(data)
    return data if data.is_a? Array

    JSON.parse(data)
  rescue
    @history.errors.add(:data, message: "Unprocesable data format")
    @history.data
  end
end
