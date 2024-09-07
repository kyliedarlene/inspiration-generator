import App from "./components/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RandomCharacter from "./pages/RandomCharacter";
import Saved from "./pages/Saved";
import ErrorPage from "./pages/ErrorPage";

import { Navigate, NavigationType, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/user";

function ProtectedRoute() {
    const {user} = useContext(UserContext);

    // useEffect(() => {
    //     fetch('/check_session').then((r) => {
    //         if(!r.ok) {
    //             return <Navigate to='/login' />
    //         }
    //     })
    // }, [user])

    if(!user) {
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