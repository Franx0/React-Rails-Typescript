RSpec.describe History, type: :model do
  subject { build(:history) }

  it 'should have a valid factory' do
    expect(subject.valid?).to be_truthy
  end

  context 'invalid record' do
    it 'should be invalid with null data' do
      subject.data = nil
      expect(subject.valid?).to be_falsey
    end

    it 'should be invalid with null type' do
      subject.type = nil
      expect(subject.valid?).to be_falsey
    end
  end
end
