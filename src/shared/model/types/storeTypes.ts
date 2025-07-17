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
