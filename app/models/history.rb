class History < ApplicationRecord
    validates_presence_of :data, :type
end
