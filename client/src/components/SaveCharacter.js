import { UserContext } from "../context/user";

import { useContext } from "react";

function SaveCharacter({ character }) {
    // const {user} = useContext(UserContext);

    character.user_id = 1

    function handleSaveCharacter() {
        fetch('/characters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(character),
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
    }
    
    return(
        <button onClick={() => handleSaveCharacter()} >
            Save Character
        </button>
    )
}

export default SaveCharacter;