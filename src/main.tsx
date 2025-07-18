import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "@/app/providers/storeProvider";
import App from "@/app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
