# Readme - Ruby Branch
## Earthquake Tracker - Ruby Branch

Welcome to the Ruby branch of Earthquake Tracker! This branch contains the Ruby application responsible for obtaining and persisting seismic data, as well as exposing a REST API for data retrieval and comment creation.

## Objectives
The primary objective of this Ruby application is to fetch seismic data from the USGS website, persist it in a database, and provide endpoints for accessing the data and creating comments associated with seismic events.

## Development Overview

1. Data Retrieval and Persistence:
* A task is implemented to fetch seismic data from the USGS website in GeoJSON format.
* The obtained data is persisted in a database, following specified guidelines.

2. REST API:
* Two endpoints are exposed to provide access to seismic data and create comments associated with seismic events.

## Usage
To run the Ruby application:
1. Clone this repository and navigate to the earthquake-ruby directory.
2. Install dependencies: bundle install.
3. Run migrations: rails db:migrate.
4. Start the server: rails server.
5. Access the API endpoints to retrieve seismic data and create comments.
