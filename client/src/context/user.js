import { createContext, useState } from 'react';

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
            setIsLoggedIn(true)
            // think through how redirect will work with saved char in state
                // maybe auto redirect should be in onSubmit, or the right page submitted as param
                // navigate can't happen until user is updated in state
                // add onLogin() seems good! https://learning.flatironschool.com/courses/7039/pages/authenticating-users?module_item_id=648853
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
        setUser(null)
    }

    // function checkSession() {
    //     fetch('/check_session')
    //         .then((r) => {
    //             if (r.ok) {
    //                 r.json()
    //                     .then((currentUser) => {
    //                         console.log(currentUser)
    //                         setUser(currentUser)
    //                         return currentUser
    //                     })
    //                 }
    //             else {
    //                 r.json()
    //                     .then((errors) => console.log(errors))
    //             }
    //         })
    // }

    return (
        <UserContext.Provider value={{ user, setUser, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }