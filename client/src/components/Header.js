import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { UserContext } from "../context/user";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    MenuItem,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
    const { user, logout } = useContext(UserContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };

    // improvement: something more legible than a nested ternary

    // return (
    //     <>
    //         <header>
    //             <Link to='/'>Inspiration Generator</Link>
    //             {user ? 
    //                 <>
    //                     {location.pathname === '/saved' ? 
    //                         <Link to={'/random-character'}><button>Roll more characters!</button></Link> 
    //                         : 
    //                         <Link to={'/saved'}><button>View Saved Characters</button></Link> 
    //                     }
    //                     <button onClick={() => logout()} >Log out</button> 
    //                 </>
    //                 : 
    //                 <>
    //                     <button onClick={() => navigate('/login')} >Log in</button>
    //                 </> 
    //             }
    //         </header>
    //     </>
    // )

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>

                {/* Title */}
                <Typography 
                    variant="h6" 
                    component="div" 
                    align="center"
                    sx={{ flexGrow: 1 }}
                >
                    Inspiration Generator
                </Typography>

                {/* Button: View Saved Characters */}
                <Button color="inherit">View Saved Characters</Button>

                {/* Button: Profile dropdown, option to logout */}
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </MenuItem>
                
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header; 