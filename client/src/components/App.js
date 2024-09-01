import { Outlet } from "react-router-dom";

import Header from "./Header";

import { UserProvider } from "../context/user";

function App() {
  return (
    <UserProvider >
      <Header />
      <Outlet />
    </UserProvider>
  )
}

export default App;