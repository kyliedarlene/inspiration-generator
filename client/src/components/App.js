import { Outlet } from "react-router-dom";

import Header from "./Header";

import { UserContext } from "../context/user";
import { useEffect, useContext } from "react";

function App() {
  const {user, checkSession} = useContext(UserContext)

  useEffect(() => checkSession(), [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;