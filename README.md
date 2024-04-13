# Technical Challenge: Earthquake Tracker

## Note: This project is a test for applying to the Software Development Engineer position at Frogmi.

This project involves the development of an application that provides seismic information using Ruby or a Ruby-based framework. The project is divided into two main branches:

- **earthquake-react**: Contains the development of a web page in React that allows querying two endpoints of an API.
- **earthquake-ruby**: Contains the Ruby application that retrieves and persists seismic data, as well as an API exposing two endpoints for data retrieval and creation of comments associated with seismic events.

## Objectives

The main objective of this project is to develop an application that provides up-to-date seismic information and allows users to interact with it through a web interface.

## Back End Development

### 1. Data Retrieval and Persistence

A task has been implemented to retrieve seismic data from the USGS site (earthquake.usgs.gov) in GeoJSON format and persist it in a database. The obtained data includes information such as magnitude, place, time, URL, and coordinates of the seismic event.

### 2. Data Availability via a REST API

The application provides two endpoints that allow access to seismic information and creation of comments associated with seismic events.

#### 2.1 Endpoint 1: Get list of seismic events

This endpoint returns a list of seismic events in the specified format, with options for filtering by magnitude type, pagination, and number of events per page.

#### 2.2 Endpoint 2: Create comment associated with a seismic event

Allows creating a comment associated with a specific seismic event by providing the event ID and comment content.

## Using the API

To use the API, you can send GET and POST requests to the endpoints mentioned above.

### Request Examples:

1. Get list of seismic events:

   ```bash
   curl -X GET
   '127.0.0.1:3000/api/features...'
   -H 'Content-Type: application/vnd.api+json'
   -H 'cache-control: no-cache'
   ```

2. Filter seismic events by magnitude type and pagination:

   ```bash
   curl -X GET
   '127.0.0.1:3000/api/features...'
   -H 'Content-Type: application/vnd.api+json'
   -H 'cache-control: no-cache'
   ```

3. Create a comment associated with a seismic event:

   ```bash
   curl --request POST
   --url 127.0.0.1:3000/api/features...
   --header 'content-type: application/json'
   --data '{"body": "This is a comment" }'
   ```

