import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// component
import { WeatherApp } from "@/components/weatherApp/WeatherApp";

// store
import { store, persistor } from "@/shared/model/store/store";

// style
import "./styles/global.css";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <WeatherApp />
    </PersistGate>
  </Provider>
);

export default App;
