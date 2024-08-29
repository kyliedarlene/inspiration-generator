import App from "./components/App";
import Home from "./pages/Home";
import RandomCharacter from "./pages/RandomCharacter";
import ErrorPage from "./pages/ErrorPage";

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
                path: '/random-character',
                element: <RandomCharacter />,
            }
        ]
    }
];

export default routes;