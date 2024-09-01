import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

function Home() {
    // const {user, checkSession} = useContext(UserContext)

    // useEffect(() => checkSession(), [])

    return (
        <>
            <h3>Heroes wanted! Let's create your custom D&D character.</h3>
            <Link to='/random-character'>
                <button>Roll Character!</button>
            </Link>
        </>
    )
}

export default Home;