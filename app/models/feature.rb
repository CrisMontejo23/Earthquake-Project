class Feature < ApplicationRecord
  validates :title, :url, :place, :mag_type, :coordinates, presence: true
  validates :magnitude, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }
  validates :latitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }
  validates :longitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }
  validates :external_id, uniqueness: true
  has_many :comments

  scope :mag_type, -> (mag_type) { where mag_type: mag_type.split(',') }
end