import { memo } from "react";

// component
import { Button } from "@/shared/ui/button/Button";

// style
import styles from "../Sidebar.module.css";

export interface Location {
  name: string;
}

interface LocationListProps {
  locations: Location[];
  selectedLocation: string;
  onLocationClick: (locationName: string) => void;
}

export const LocationList = memo(
  ({ locations, selectedLocation, onLocationClick }: LocationListProps) => {
    const handleLocationClick = (name: string) => {
      // to prevent re-sending request when the same location is clicked
      if (selectedLocation !== name) onLocationClick(name);
    };

    return (
      <ul className={styles.locationList} role="listbox" aria-label="Locations">
        {locations.map((location) => (
          <li
            key={location.name}
            role="option"
            aria-selected={selectedLocation === location.name}
          >
            <Button
              className={`${styles.locationItem} ${
                selectedLocation === location.name ? styles.active : ""
              }`}
              tabIndex={0}
              onClick={() => handleLocationClick(location.name)}
            >
              <span>{location.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);
