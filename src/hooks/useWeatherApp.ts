import { useSelector } from "react-redux";

// utils
import {
  getBackgroundImage,
  getWeatherBackground,
  getWeatherCondition,
} from "@/shared/lib/utils/weatherUtils";

// type
import type { RootState } from "@/shared/model/store/store";

export const useWeatherApp = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );

  const weatherCondition = currentWeather
    ? getWeatherCondition(currentWeather.weathercode)
    : "default";

  const backgroundClass = getWeatherBackground(weatherCondition);
  const backgroundImage = getBackgroundImage(weatherCondition);

  return {
    backgroundClass,
    backgroundImage,
  };
};
