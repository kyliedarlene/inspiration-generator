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
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])

  console.log(location)
  console.log(isLoggedIn)

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;