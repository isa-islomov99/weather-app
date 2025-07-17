import { memo } from "react";
import { Button } from "@/shared/ui/button/Button";
import styles from "../Sidebar.module.css";

export type TabType = "uzbekistan" | "popular";

const TABS: { key: TabType; label: string }[] = [
  { key: "uzbekistan", label: "Uzbekistan Regions" },
  { key: "popular", label: "Popular Cities" },
];

interface LocationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const LocationTabs = memo(
  ({ activeTab, onTabChange }: LocationTabsProps) => (
    <div className={styles.tabsWrapper} role="tablist">
      {TABS.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => onTabChange(key)}
          className={[
            styles.locationItem,
            styles.tabButton,
            activeTab === key ? styles.active : styles.inactive,
          ].join(" ")}
          role="tab"
        >
          {label}
        </Button>
      ))}
    </div>
  )
);
