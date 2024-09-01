import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { UserContext } from "../context/user";

function Header() {
    const { logout } = useContext(UserContext)
    // learn: why does this syntax work?
    
    return (
        <>
            <header>
                <Link to='/'>Inspiration Generator</Link>
                <button onClick={() => logout()} >Log out</button>
            </header>
        </>
    )
}

export default Header; 