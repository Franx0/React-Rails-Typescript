RSpec.describe HistoryCreator do
  let(:params) { { data: "[1,2,3,4]", typed: :numeric } }

  it "should be valid" do
    expect(
      HistoryCreator.call(params)
    ).to be_truthy
  end

  it "should create history record" do
    expect {
      HistoryCreator.call(params)
    }.to change(History, :count).by(1)
  end

  it "should not create history record" do
    expect {
      HistoryCreator.call({ data: nil, typed: :numeric })
    }.to change(History, :count).by(0)

    expect {
      HistoryCreator.call({ data: "[1,2,3,4]", typed: nil })
    }.to change(History, :count).by(0)
  end

  it "should formalize params before create record" do
    expect(
      HistoryCreator.new(
        { data: "[1,2,3]", typed: :numeric }
      ).send(:formalize_data, "[1,2,3]")
    ).to match_array([1,2,3])
  end
end
