import App from "./components/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RandomCharacter from "./pages/RandomCharacter";
import Saved from "./pages/Saved";
import ErrorPage from "./pages/ErrorPage";

import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const loggedIn = true
    if (!loggedIn) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/random-character',
                element: <RandomCharacter />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/saved',
                        element: <Saved />
                    }
                ]
            },
        ],
    }
];

export default routes;