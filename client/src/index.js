import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { UserProvider } from "./context/user";
import { SavedCharactersProvider } from "./context/savedCharacters";

const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <UserProvider>
        <SavedCharactersProvider>
            <RouterProvider router={router} />
        </SavedCharactersProvider>
    </UserProvider>
);