RSpec.shared_examples "controller status response" do |http_status|
  it "should return #{http_status} response" do
    expect(response).to have_http_status(http_status)
  end
end

RSpec.shared_examples "controller data format response" do |key|
  it "should return proper response format" do
    expect(json_response).to have_key(key)
  end
end

RSpec.shared_examples "controller object format response" do |type, key, definition|
  it "should return #{definition}" do
    expect(json_response[key].class).to eql(type)
  end
end
