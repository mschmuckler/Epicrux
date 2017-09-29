class Seizure < ApplicationRecord
  validates :user_id, :date, :start_time, presence: true

  belongs_to :user
end
