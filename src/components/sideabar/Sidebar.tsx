import { useCallback, useMemo, useState } from "react";
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
import { uzbekistanRegions, popularCities } from "@/shared/lib/consts/regions";

// types
import type { RootState, AppDispatch } from "@/app/providers/storeProvider";

// style
import styles from "./Sidebar.module.css";

type TabType = "uzbekistan" | "popular";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentWeather, searchQuery, selectedLocation, error, isLoading } =
    useSelector((state: RootState) => state.weather);
  const [activeTab, setActiveTab] = useState<TabType>("uzbekistan");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(setSelectedLocation(searchQuery.trim()));
      dispatch(weatherThunk(searchQuery.trim()));
    }
  };

  const handleLocationClick = useCallback(
    (locationName: string) => {
      dispatch(setSelectedLocation(locationName));
      dispatch(weatherThunk(locationName));
    },
    [dispatch]
  );

  const handleQueryChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  const currentLocations = useMemo(() => {
    return activeTab === "uzbekistan"
      ? [...uzbekistanRegions]
      : popularCities.map((city) => ({ name: city }));
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
      <div className={styles.weatherDetails}>
        <h3 className={styles.sectionTitle}>Weather Details</h3>
        <WeatherDetails
          currentWeather={currentWeather}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
