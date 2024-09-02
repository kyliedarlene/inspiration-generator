import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { UserContext } from "../context/user";

function Header() {
    const { user, logout } = useContext(UserContext)
    // learn: why does this syntax work? deconstruction, right?

    return (
        <>
            <header>
                <Link to='/'>Inspiration Generator</Link>
                {user ?
                    <Link to={'/saved'}><button>View Saved Characters</button></Link>
                    : null
                }
                <button onClick={() => logout()} >Log out</button>
            </header>
        </>
    )
}

export default Header; 