import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

import { UserContext } from "../context/user";

function App() {
  const {checkSession} = useContext(UserContext)

  useEffect(() => checkSession(), [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;