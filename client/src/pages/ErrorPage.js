import { 
    useRouteError,
    Link
} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <>
            <h3>Oops! This page doesn't exist.</h3>
            <Link to='/'>Return to homepage</Link>
            {/* figure out how to add Link inline */}
        </>
    )
}

export default ErrorPage;