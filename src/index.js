import React from "react";
import ReactDOM from "react-dom/client";
// Step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);