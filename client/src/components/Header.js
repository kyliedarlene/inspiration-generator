import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import { UserContext } from "../context/user";

function Header() {
    const { user, logout } = useContext(UserContext)
    const location = useLocation();
    const navigate = useNavigate();

    // improvement: something more legible than a nested ternary

    return (
        <>
            <header>
                <Link to='/'>Inspiration Generator</Link>
                {user ? 
                    <>
                        {location.pathname === '/saved' ? 
                            <Link to={'/random-character'}><button>Roll more characters!</button></Link> 
                            : 
                            <Link to={'/saved'}><button>View Saved Characters</button></Link> 
                        }
                        <button onClick={() => logout()} >Log out</button> 
                    </>
                    : 
                    <>
                        <button onClick={() => navigate('/login')} >Log in</button>
                    </> 
                }
            </header>
        </>
    )
}

export default Header; 