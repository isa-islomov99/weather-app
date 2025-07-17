// style
import styles from "./Loading.module.css";

export const WeatherLoading = () => {
  return (
    <div className={styles.loading}>
      <div>Loading weather data...</div>
    </div>
  );
};
