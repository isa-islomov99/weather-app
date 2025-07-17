import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { MainContent } from "./MainContent";
import { Sidebar } from "../sideabar/Sidebar";

// thunk
import { weatherThunk } from "@/shared/model/thunks/weatherThunk";

// hook
import { useWeatherApp } from "@/hooks/useWeatherApp";

// types
import type { RootState, AppDispatch } from "@/app/providers/storeProvider";

// style
import styles from "./WeahterApp.module.css";

export const WeatherApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedLocation = useSelector(
    (state: RootState) => state.weather.selectedLocation
  );
  const { backgroundClass, backgroundImage } = useWeatherApp();

  useEffect(() => {
    dispatch(weatherThunk(selectedLocation));
  }, []);

  return (
    <div className={`${styles.container} ${backgroundClass}`}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Weather background"
          className={`${styles.backgroundImage} animate-float`}
        />
      )}

      <main className={styles.mainContent}>
        <MainContent />
      </main>

      <aside className={`${styles.sidebar} glass animate-slide-in`}>
        <Sidebar />
      </aside>
    </div>
  );
};
