import App from "./components/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RandomCharacter from "./pages/RandomCharacter";
import Saved from "./pages/Saved";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/random-character',
                element: <RandomCharacter />
            },
            {
                path: '/saved',
                element: <Saved />
            }
        ]
    }
];

export default routes;