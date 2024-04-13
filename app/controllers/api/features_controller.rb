class Api::FeaturesController < ApplicationController
  def index
    @features = Feature.where(nil)
    @features = @features.mag_type(params[:mag_type]) if params[:mag_type].present?
    @features = @features.page(params[:page]).per(params[:per_page] || 1000)

    render json: {
      data: @features.map do |feature|
        {
          id: feature.id,
          type: "feature",
          attributes: {
            external_id: feature.external_id,
            magnitude: feature.magnitude,
            place: feature.place,
            time: feature.time,
            tsunami: feature.tsunami,
            mag_type: feature.mag_type,
            title: feature.title,
            coordinates: {
              longitude: feature.longitude,
              latitude: feature.latitude
            }
          },
          links: {
            external_url: feature.url
          }
        }
      end,
      pagination: {
        current_page: @features.current_page,
        total: @features.total_count,
        per_page: @features.limit_value
      }
    }
  end
end