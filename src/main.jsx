import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={MainRouter}></RouterProvider>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
