import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})

    // function test () {console.log(user)}

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }