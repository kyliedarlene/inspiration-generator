import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";

function Saved() {
    const {user} = useContext(UserContext)
    const [savedChars, setSavedChars] = useState([])

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((u) => setSavedChars(u.characters))
    // }, [])

    useEffect(() => setSavedChars(user.characters), [])

    console.log(savedChars)

    return(
        <h1>Saved Characters</h1>
    )

}

export default Saved;