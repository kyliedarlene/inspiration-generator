import { useEffect, useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";

import { UserContext } from "../context/user";

function App() {
  const {setUser} = useContext(UserContext)

  useEffect(() => {
    fetch('/check_session').then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => {
          console.log(currentUser)
          setUser(currentUser)
        })
      }
      else {
        r.json().then((errors) => console.log(errors))
      }
    })
  }, [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;