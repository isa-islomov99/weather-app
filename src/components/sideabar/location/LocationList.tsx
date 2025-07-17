import styles from "../Sidebar.module.css";

interface Location {
  name: string;
  nameUz: string;
}

interface LocationListProps {
  locations: Location[];
  selectedLocation: string;
  onLocationClick: (locationName: string) => void;
}

export const LocationList = ({
  locations,
  selectedLocation,
  onLocationClick,
}: LocationListProps) => (
  <div className={styles.locationList}>
    {locations.map((location) => (
      <div
        key={location.name}
        className={`${styles.locationItem} ${
          selectedLocation === location.name ? styles.active : ""
        }`}
        onClick={() => onLocationClick(location.name)}
      >
        <div>{location.name}</div>
        {location.nameUz !== location.name && (
          <div className={styles.locationNameUz}>{location.nameUz}</div>
        )}
      </div>
    ))}
  </div>
);
