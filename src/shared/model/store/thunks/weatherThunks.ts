import { createAsyncThunk } from "@reduxjs/toolkit";

// api
import { fetchWeatherData } from "@/shared/api/fetchWeather";

export const weatherThunk = createAsyncThunk(
  "weather/fetchWeather",
  async (location: string, { rejectWithValue }) => {
    try {
      const { coords, weatherData } = await fetchWeatherData(location);
      return {
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        windspeed: weatherData.current.wind_speed_10m,
        winddirection: weatherData.current.wind_direction_10m,
        weathercode: weatherData.current.weather_code,
        name: coords.name,
        country: coords.country,
        latitude: coords.latitude,
        longitude: coords.longitude,
        timezone: coords.timezone || weatherData.timezone,
        time: weatherData.current.time,
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch weather"
      );
    }
  }
);
