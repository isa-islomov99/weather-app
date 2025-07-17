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
              onClick={() => onLocationClick(location.name)}
            >
              <span>{location.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);
