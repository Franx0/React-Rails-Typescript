RSpec.describe Api::V1::HistoriesController, type: %i[controller api] do
  describe "GET /histories" do
    let!(:histories) { create_list(:history, 10) }

    before { get :index }

    include_examples "controller status response", :ok
    include_examples "controller data format response", "data"
    include_examples "controller object format response", Array, "data", "all histories"

    it "should return all proposals" do
      expect(json_response["data"].count).to eql(10)
    end
  end

  describe "POST /calc" do
    before {
      @params = { history: { data: [1, 2, 3], typed: :numeric } }
      @invalid_params = { history: { data: nil, typed: nil } }
    }

    it "should create one history" do
      expect { post :create, params: @params }.to change { History.count }.by(1)
    end

    it "should not create one history" do
      expect{ post :create, params: @invalid_params }.to change { History.count }.by(0)
    end

    context "valid create" do
      before { post :create, params: @params }

      include_examples "controller status response", :created
      include_examples "controller data format response", "data"
      include_examples "controller object format response", Hash, "data", "created history"
    end

    context "invalid create" do
      before { post :create, params: @invalid_params }

      include_examples "controller status response", :unprocessable_entity
      include_examples "controller data format response", "errors"
      include_examples "controller object format response", Hash, "errors", "history errors"
    end
  end
end
