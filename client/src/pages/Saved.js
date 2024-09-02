import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from "../context/user";
import CharacterCard from "../components/CharacterCard";

function Saved() {
    const {user} = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/login') // possibly find a way to pass this a prop if Login takes a onLogin()
        }
    }, [])
    // const [savedChars, setSavedChars] = useState([])

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((u) => setSavedChars(u.characters))
    // }, [])

    // useEffect(() => setSavedChars(user.characters), [])

    let characters;
    if(user){
        characters = user.characters;
    }
    // const characters = user.characters;

    return(
        <>
            <h1>Saved Characters</h1>
            {characters ? 
                characters.map((char) => (
                        <CharacterCard key={char.id} character={char} />
                ))
                : null
            }
        </>
    )

}

export default Saved;