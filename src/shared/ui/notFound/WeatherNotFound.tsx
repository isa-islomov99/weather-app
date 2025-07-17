// style
import styles from "../loading/Loading.module.css";

export const WeatherNotFound = () => {
  return (
    <div className={styles.loading}>
      <div>No weather data available</div>
    </div>
  );
};
