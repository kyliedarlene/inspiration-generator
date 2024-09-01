import { createContext, useState } from 'react';

const UserContext = createContext({
    user: "bowie",
    setUser: () => console.log("bowiegirlbowiegirl")
});

function UserProvider({ children }) {
    const [user, setUser] = useState("indy")

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }