FactoryBot.define do
  factory :history do
    data { (1...4).to_a }
    type { 'numeric' }
  end
end
