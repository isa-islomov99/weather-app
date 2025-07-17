import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { SidebarSearch } from "./SidebarSearch";
import { LocationTabs } from "./location/LocationTabs";
import { LocationList } from "./location/LocationList";
import { WeatherDetails } from "./WeatherDetails";

// slice
import {
  setSearchQuery,
  setSelectedLocation,
} from "@/shared/model/store/slices/weatherSlice";

// thunk
import { weatherThunk } from "@/shared/model/store/thunks/weatherThunks";

// consts
import {
  uzbekistanRegions,
  popularCities,
} from "@/shared/lib/consts/uzRegions";

// types
import type { RootState, AppDispatch } from "@/shared/model/store/store";

// style
import styles from "./Sidebar.module.css";

type TabType = "uzbekistan" | "popular";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentWeather, searchQuery, selectedLocation } = useSelector(
    (state: RootState) => state.weather
  );
  const [activeTab, setActiveTab] = useState<TabType>("uzbekistan");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(setSelectedLocation(searchQuery.trim()));
      dispatch(weatherThunk(searchQuery.trim()));
    }
  };

  const handleLocationClick = (locationName: string) => {
    dispatch(setSelectedLocation(locationName));
    dispatch(weatherThunk(locationName));
  };

  const handleQueryChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const currentLocations = useMemo(() => {
    return activeTab === "uzbekistan"
      ? [...uzbekistanRegions]
      : popularCities.map((city) => ({ name: city, nameUz: city }));
  }, [activeTab]);

  return (
    <div className={styles.sidebar}>
      {/* Search Section */}
      <SidebarSearch
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onQueryChange={handleQueryChange}
      />

      {/* Location Tabs */}
      <div className={styles.section}>
        <LocationTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <LocationList
          locations={currentLocations}
          selectedLocation={selectedLocation}
          onLocationClick={handleLocationClick}
        />
      </div>

      {/* Weather Details */}
      <WeatherDetails currentWeather={currentWeather} />
    </div>
  );
};
