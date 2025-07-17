import { memo } from "react";

// component
import { Button } from "@/shared/ui/button/Button";

// style
import styles from "../Sidebar.module.css";

type TabType = "uzbekistan" | "popular";

interface LocationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const LocationTabs = memo(
  ({ activeTab, onTabChange }: LocationTabsProps) => {
    return (
      <div className={styles.tabsWrapper}>
        <Button
          onClick={() => onTabChange("uzbekistan")}
          className={`${styles.locationItem} ${styles.tabButton} ${
            activeTab === "uzbekistan" ? styles.active : styles.inactive
          }`}
        >
          Uzbekistan Regions
        </Button>
        <Button
          onClick={() => onTabChange("popular")}
          className={`${styles.locationItem} ${styles.tabButton} ${
            activeTab === "popular" ? styles.active : styles.inactive
          }`}
        >
          Popular Cities
        </Button>
      </div>
    );
  }
);
