import React from "react";

// components
import { Search } from "lucide-react";
import { Button } from "@/shared/ui/button/Button";

// style
import styles from "./Sidebar.module.css";

interface SidebarSearchProps {
  searchQuery: string;
  onSearch: (e: React.FormEvent) => void;
  onQueryChange: (value: string) => void;
}

export const SidebarSearch = ({
  searchQuery,
  onSearch,
  onQueryChange,
}: SidebarSearchProps) => (
  <div className={styles.searchSection}>
    <form onSubmit={onSearch}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => onQueryChange(e.target.value)}
          className={styles.searchInput}
        />
        <Button type="submit" className={styles.searchButton}>
          <Search size={18} />
        </Button>
      </div>
    </form>
  </div>
);
