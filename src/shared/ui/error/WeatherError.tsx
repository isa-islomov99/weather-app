// style
import styles from "./Error.module.css";

export const WeatherError = ({ error }: { error: string | null }) => {
  return (
    <div className={styles.error}>
      <p>Error: {error}</p>
      <p>Please try a different location.</p>
    </div>
  );
};
