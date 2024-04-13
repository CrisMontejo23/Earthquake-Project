require 'net/http'
require 'json'

namespace :fetch do
  desc "Fetch earthquake data from USGS"
  task earthquake_data: :environment do
    url = URI('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    response = Net::HTTP.get(url)
    data = JSON.parse(response)

    data['features'].each do |feature|
      Feature.create(
        external_id: feature['id'],
        magnitude: feature['properties']['mag'],
        place: feature['properties']['place'],
        time: feature['properties']['time'],
        url: feature['properties']['url'],
        tsunami: feature['properties']['tsunami'],
        mag_type: feature['properties']['magType'],
        title: feature['properties']['title'],
        longitude: feature['geometry']['coordinates'][0],
        latitude: feature['geometry']['coordinates'][1]
      )
    end
  end
end