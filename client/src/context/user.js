import { createContext, useState } from 'react';

const UserContext = createContext("bowie");

function UserProvider({ children }) {
    // const [user, setUser] = useState({user: null})

    return (
        <UserContext.Provider value={"beck"}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }