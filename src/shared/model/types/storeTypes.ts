export interface WeatherResponse {
  temperature: number;
  humidity: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  time: string;
}

export interface WeatherState {
  currentWeather: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedLocation: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
  timezone: string;
}

export interface GeocodingApiResult {
  results: Array<{
    latitude: number;
    longitude: number;
    name: string;
    country: string;
    timezone: string;
  }>;
}

export interface WeatherApiResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    time: string;
  };
  timezone: string;
}
