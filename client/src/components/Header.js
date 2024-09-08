import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Switch,
    FormGroup,
    FormControlLabel
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

import { UserContext } from "../context/user";

function Header() {
    const { user, logout } = useContext(UserContext)
    const location = useLocation();
    const navigate = useNavigate();

    /////////////

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>

        {/* auth toggle */}
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>

      {/* nav bar */}
      <AppBar position="static">
        <Toolbar>

          {/* title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inspiration Generator
          </Typography>

          {/* render if logged in */}
          {user && (
            <div>
                
                {/* Button: view saved characters */}
                {location.pathname === '/saved' ? 
                    <Link to={'/random-character'}><Button color="inherit" >Roll more characters!</Button></Link> 
                    : 
                    <Link to={'/saved'}><Button color="inherit" >My characters</Button></Link> 
                }

                {/* profile icon */}
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>

                {/* profile dropdown */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClick={logout}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </div>
          )}

          {/* render if NOT logged in */}
          {!user && (
            <div>

                {/* Button: login */}
                <Button color="inherit" onClick={() => navigate('/login')} >
                    Login
                </Button>

            </div>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );

    }

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

export default Header; 