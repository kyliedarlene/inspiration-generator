import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RandomCharacter from "./pages/RandomCharacter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/random-character',
        element: <RandomCharacter />
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
root.render(<RouterProvider router={router} />);
