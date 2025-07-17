import { memo } from "react";
import styles from "./Sidebar.module.css";

interface WeatherDetailsProps {
  currentWeather: {
    temperature: number;
    humidity: number;
    windspeed: number;
    winddirection: number;
  } | null;
  error: string | null;
  isLoading: boolean;
}

export const WeatherDetails = memo(
  ({ currentWeather, error, isLoading }: WeatherDetailsProps) => {
    if (isLoading) return <span className={styles.loading}>Loading...</span>;

    if (!currentWeather || error)
      return <span className={styles.errorMessage}>{error}</span>;

    return (
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Temperature</div>
          <div className={styles.detailValue}>
            {Math.round(currentWeather.temperature)}
            <span className={styles.detailUnit}>°C</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Humidity</div>
          <div className={styles.detailValue}>
            {currentWeather.humidity}
            <span className={styles.detailUnit}>%</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Wind</div>
          <div className={styles.detailValue}>
            {Math.round(currentWeather.windspeed)}
            <span className={styles.detailUnit}>km/h</span>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Wind Direction</div>
          <div className={styles.detailValue}>
            {Math.round(currentWeather.winddirection)}
            <span className={styles.detailUnit}>°</span>
          </div>
        </div>
      </div>
    );
  }
);
