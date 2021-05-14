class HistoryCreator < ApplicationService
  def initialize(params)
    @params = params.as_json.deep_symbolize_keys
    @errors = OpenStruct.new({ errors: [] })
  end

  def call
    data = formalize_data(@params[:data])
    History.create(data: data, typed: @params[:type])
  end

  private

  def formalize_data(data)
    data
  end
end
