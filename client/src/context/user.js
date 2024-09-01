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

    function signup(values) {
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            // note to self: did not include replacer or space params for .stringify()
        })
            .then((r) => r.json())
            .then((newUser) => {
                console.log(`Signed up ${newUser.username}!`)
                login(values)
            })
    }

    function logout() {
        fetch('/logout', {
            method: 'DELETE'
        });
        console.log('logged out')
        setUser({})
        // maybe: set to NULL instead
    }

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }