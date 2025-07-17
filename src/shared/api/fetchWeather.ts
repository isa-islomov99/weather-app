import { getCoordinates } from "./getCoordinates";
import type {
  Coordinates,
  WeatherApiResponse,
} from "@/shared/model/types/storeTypes";

export async function fetchWeatherData(
  location: string
): Promise<{ coords: Coordinates; weatherData: WeatherApiResponse }> {
  const coords = await getCoordinates(location);

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&timezone=auto`
  );

  if (!response.ok) throw new Error("Weather data not found");
  const weatherData: WeatherApiResponse = await response.json();

  return { coords, weatherData };
}
