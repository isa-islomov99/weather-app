import { useSelector } from "react-redux";

// components
import { WeatherLoading } from "@/shared/ui/loading/WeatherLoading";
import { WeatherError } from "@/shared/ui/error/WeatherError";
import { WeatherNotFound } from "@/shared/ui/notFound/WeatherNotFound";

// utils
import { formatDateTime } from "@/shared/lib/utils/dateUtils";
import {
  getWeatherCondition,
  getWeatherDescription,
  getWeatherIcon,
} from "@/shared/lib/utils/weatherUtils";

// type
import type { RootState } from "@/app/providers/storeProvider";

// style
import styles from "./WeahterApp.module.css";

export const MainContent = () => {
  const { currentWeather, isLoading, error } = useSelector(
    (state: RootState) => state.weather
  );

  if (isLoading) {
    return <WeatherLoading />;
  }

  if (error) {
    return <WeatherError error={error} />;
  }

  if (!currentWeather) {
    return <WeatherNotFound />;
  }

  const weatherCondition = currentWeather
    ? getWeatherCondition(currentWeather.weathercode)
    : "default";

  return (
    <div className={`${styles.weatherCard} animate-fade-in`}>
      <div className={styles.dateTime}>
        {formatDateTime(currentWeather.time)}
      </div>
      <h1 className={styles.temperature}>
        {Math.round(currentWeather.temperature)}
        <span className={styles.temperatureUnit}>°C</span>
      </h1>
      <h2 className={styles.location}>
        {currentWeather.name}, {currentWeather.country}
      </h2>
      <div className={styles.weatherDescription}>
        <span className={styles.weatherIcon}>
          {getWeatherIcon(weatherCondition)}
        </span>
        {getWeatherDescription(currentWeather.weathercode)}
      </div>
    </div>
  );
};
