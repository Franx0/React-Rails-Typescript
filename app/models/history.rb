class History < ApplicationRecord
  validates_presence_of :data, :type
  enum typed: { numeric: 1 }
end
