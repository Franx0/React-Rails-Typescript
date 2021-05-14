class History < ApplicationRecord
  validates_presence_of :data, :typed
  enum typed: { numeric: 1 }
end
