// Reference: https://open-meteo.com/en/docs
export const getWeatherCondition = (weatherCode: number): string => {
  if (weatherCode === 0) return "clear";
  if ([1, 2, 3].includes(weatherCode)) return "clouds";
  if ([45, 48].includes(weatherCode)) return "fog";
  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)
  )
    return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return "snow";
  if ([95, 96, 99].includes(weatherCode)) return "thunderstorm";
  return "default";
};

export const getWeatherDescription = (weatherCode: number): string => {
  const descriptions: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  return descriptions[weatherCode] || "Unknown";
};

// Weather background mapping
export const getWeatherBackground = (condition: string): string => {
  const conditionMap: { [key: string]: string } = {
    clear: "bg-sunny",
    clouds: "bg-cloudy",
    rain: "bg-rainy",
    thunderstorm: "bg-rainy",
    snow: "bg-snowy",
    fog: "bg-cloudy",
    default: "bg-default",
  };

  return conditionMap[condition] || conditionMap["default"];
};

// Background images based on weather
export const getBackgroundImage = (condition: string): string | null => {
  // Following approach is not better approach for user-facing or production apps: It’s usually better to convert
  // to webp format and compress the images for better performance
  const imageMap: { [key: string]: string | null } = {
    clear: "/images/clear.jpeg",
    sunny: "/images/sunny.jpeg",
    clouds: "/images/clouds.jpeg",
    cloudy: "/images/cloudy.jpeg",
    rain: "/images/rain.jpeg",
    drizzle: "/images/rain.jpeg",
    thunderstorm: "/images/rain.jpeg",
    snow: "/images/snow.jpeg",
    mist: null,
    fog: null,
    haze: null,
    default: "/images/default.jpeg",
  };

  return imageMap[condition] || imageMap["default"];
};

// Weather icon mapping for fallback
export const getWeatherIcon = (condition: string): string => {
  const iconMap: { [key: string]: string } = {
    clear: "☀️",
    sunny: "☀️",
    clouds: "☁️",
    cloudy: "☁️",
    rain: "🌧️",
    drizzle: "🌦️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
    fog: "🌫️",
    haze: "🌫️",
    default: "🌤️",
  };

  return iconMap[condition] || iconMap["default"];
};
