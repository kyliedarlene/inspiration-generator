import { useEffect, useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";

import { UserContext } from "../context/user";

function App() {
  const {checkSession, isLoggedIn} = useContext(UserContext)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkSession()
    if (isLoggedIn) {
      if((location.pathname === '/login') | (location.pathname === '/signup')) {
        navigate('/')
      }
    } 
    else {
      if(location.pathname === '/saved') {
        navigate('/login')
      }
    }
  }, [isLoggedIn])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;