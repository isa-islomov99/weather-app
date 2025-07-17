// Function to get coordinates for a location using geocoding
import type {
  Coordinates,
  GeocodingApiResult,
} from "@/shared/model/types/storeTypes";

export const getCoordinates = async (
  location: string
): Promise<Coordinates> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      location
    )}&count=1&language=en&format=json`
  );
  const data: GeocodingApiResult = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Location not found");
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
    country: data.results[0].country,
    timezone: data.results[0].timezone,
  };
};
