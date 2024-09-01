import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})

    function login(values) {
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        .then((r) => r.json())
        .then((newUser) => {
            console.log(`Logged in ${newUser.username}!`)
            // add: handling for failed login
            setUser(newUser)
            // navigate('/')
            // think through how redirect will work with saved char in state
                // maybe auto redirect should be in onSubmit, or the right page submitted as param
                // navigate can't happen until user is updated in state
        })
    }

    return (
        <UserContext.Provider value={{ user, setUser, login }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }