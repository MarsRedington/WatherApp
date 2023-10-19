export interface Current {
  interval: number;
  precipitation: number;
  rain: number;
  relativehumidity_2m: number;
  showers: number;
  snowfall: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  winddirection_10m: number;
  windgusts_10m: number;
  windspeed_10m: number;
}

export interface CurrentUnits {
  interval: String;
  precipitation: String;
  rain: String;
  relativehumidity_2m: String;
  showers: String;
  snowfall: String;
  temperature_2m: String;
  time: String;
  weathercode: String;
  winddirection_10m: String;
  windgusts_10m: String;
  windspeed_10m: String;
}

export interface Daily {
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  weathercode: [number];
  uv_index_max: [number];
  sunrise: [string];
  sunset: [string];
}

export interface DailyUnits {
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  weathercode: string;
}

export interface Hourly {
  apparent_temperature: [number];
  precipitation: [number];
  precipitation_probability: [number];
  rain: [number];
  relativehumidity_2m: [number];
  shomwers: [number];
  show_depth: [number];
  snowfall: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  uv_index_clear_sky: [number];
  windgusts_10m: [number];
}

export interface HourlyUnits {
  apparent_temperature: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relativehumidity_2m: string;
  showers: string;
  show_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  windgusts_10m: string;
}

export interface Root {
  current: Current;
  current_units: CurrentUnits;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
