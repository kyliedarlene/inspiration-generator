import { UserContext } from "../context/user";
import { SavedCharactersContext } from "../context/savedCharacters";

import { useContext } from "react";

import { IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function SaveCharacter({ character }) {
    const {user} = useContext(UserContext);
    const {savedCharacters, setSavedCharacters} = useContext(SavedCharactersContext)

    // temporary handling for logged out    
    if(!user) {
        return null
    }

    character.user_id = user['id']

    function handleSaveCharacter() {
        fetch('/characters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(character),
        })
            .then((r) => r.json())
            .then((newChar) => {
                console.log(newChar)
                setSavedCharacters([...savedCharacters, newChar])
            })
    }
    
    return(
        <IconButton onClick={handleSaveCharacter} aria-label="save-character">
            <StarBorderIcon fontSize="small" />
        </IconButton>
    )
}

export default SaveCharacter;