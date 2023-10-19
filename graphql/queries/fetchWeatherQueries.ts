import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current: String = "temperature_2m,relativehumidity_2m,precipitation,rain,showers,snowfall,weathercode,windspeed_10m,winddirection_10m,windgusts_10m"
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,uv_index,uv_index_clear_sky"
    $latitude: String
    $longitude: String
    $timezone: String
  ) {
    myQuery(
      current: $current
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      current {
        interval
        precipitation
        rain
        relativehumidity_2m
        showers
        snowfall
        temperature_2m
        time
        weathercode
        winddirection_10m
        windgusts_10m
        windspeed_10m
      }
      current_units {
        interval
        precipitation
        rain
        relativehumidity_2m
        showers
        snowfall
        temperature_2m
        time
        weathercode
        winddirection_10m
        windgusts_10m
        windspeed_10m
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windgusts_10m_max
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windgusts_10m_max
        windspeed_10m_max
      }
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        weathercode
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        weathercode
      }
    }
  }
`;

export default fetchWeatherQuery;
