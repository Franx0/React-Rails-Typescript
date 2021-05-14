RSpec.describe HistoryCreator do
  let(:params) { { data: "[1,2,3,4]", type: :numeric } }

  it "should be valid" do
    expect(
      HistoryCreator.call(params)
    ).to be_truthy
  end

  it "should create history record" do
    expect do
      HistoryCreator.call(params)
    end.to change(History, :count).by(1)
  end

  it "should not create history record" do
    expect do
      HistoryCreator.call({ data: nil, typed: :numeric })
    end.to change(History, :count).by(0)

    expect do
      HistoryCreator.call({ data: "[1,2,3,4]", typed: nil })
    end.to change(History, :count).by(0)
  end
end
