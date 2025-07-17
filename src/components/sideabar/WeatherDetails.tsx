import styles from "./Sidebar.module.css";

interface WeatherDetailsProps {
  currentWeather: {
    temperature: number;
    humidity: number;
    windspeed: number;
    winddirection: number;
  } | null;
}

export const WeatherDetails = ({ currentWeather }: WeatherDetailsProps) => {
  if (!currentWeather) return null;

  return (
    <div className={styles.weatherDetails}>
      <h3 className={styles.sectionTitle}>Weather Details</h3>
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
    </div>
  );
};
