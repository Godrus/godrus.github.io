import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { initTheme } from "@/shared/lib/theme";
import "@/shared/ui/styles/style.css";
import "@/shared/ui/styles/neumorphism.css";

initTheme();

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element #root not found");
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
