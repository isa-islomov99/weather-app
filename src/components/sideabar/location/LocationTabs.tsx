import styles from "../Sidebar.module.css";

type TabType = "uzbekistan" | "popular";

interface LocationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const LocationTabs = ({ activeTab, onTabChange }: LocationTabsProps) => (
  <div className={styles.tabsWrapper}>
    <button
      onClick={() => onTabChange("uzbekistan")}
      className={`${styles.locationItem} ${styles.tabButton} ${
        activeTab === "uzbekistan" ? styles.active : styles.inactive
      }`}
    >
      Uzbekistan Regions
    </button>
    <button
      onClick={() => onTabChange("popular")}
      className={`${styles.locationItem} ${styles.tabButton} ${
        activeTab === "popular" ? styles.active : styles.inactive
      }`}
    >
      Popular Cities
    </button>
  </div>
);
