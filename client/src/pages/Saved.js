import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";

function Saved() {
    const {user} = useContext(UserContext)
    const [characters, setCharacters] = useState([])

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((u) => setCharacters(chars))
    // }, [])

    console.log(user)

    return(
        <h1>Saved Characters</h1>
    )

}

export default Saved;