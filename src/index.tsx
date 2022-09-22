import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryClientProvider } from "./libs/react-query";
import { AuthContextProvider } from "./context/auth.context";
import "./index.css";
import App from "./App";
import { PaletteContextProvider } from "./context/palette.context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryClientProvider>
        <AuthContextProvider>
          <PaletteContextProvider>
            <App />
          </PaletteContextProvider>
        </AuthContextProvider>
        <ReactQueryDevtools />
      </ReactQueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
