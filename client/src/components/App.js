import { useEffect, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { UserContext } from "../context/user";
import { SavedCharactersContext } from "../context/savedCharacters";

function App() {
  const {setUser} = useContext(UserContext)
  const {setSavedCharacters} = useContext(SavedCharactersContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/check_session').then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => {
          console.log(currentUser)
          setUser(currentUser)
          setSavedCharacters(currentUser.characters)
          // console.log(currentUser.characters)
          setIsLoading(false);
        })
      }
      else {
        r.json().then(() => setIsLoading(false))
      }
    })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;