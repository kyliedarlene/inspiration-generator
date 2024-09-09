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

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* nav bar */}
      <AppBar position="static">
        <Toolbar>

          {/* title */}
          <Link to='/'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Inspiration Generator
            </Typography>
          </Link>

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

          {/* render if NOT logged in and route !== /login or /signup */}
          {!user && location.pathname !== '/login' && location.pathname !== '/signup' && (
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

export default Header; 