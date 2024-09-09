import { useState, useEffect } from "react";

import {
    Button,
    Container,
} from '@mui/material'
import { flex } from '@mui/system';

import CharacterCard from "../components/CharacterCard";
import generateCharacter from "../utilities/generateCharacter";

function RandomCharacter() {
    const [character, setCharacter] = useState()

    useEffect(() => {
        if(!character) {
            generateCharacter()
                .then((char) => setCharacter(char))
        }
    }, [character])

    console.log(character)
        
    return (
        <Container 
            maxWidth='sm' 
            sx={{ 
                justifyContent: 'center', 
                display: flex
            }} 
        >
            <CharacterCard character={character} />
            <Button variant={"contained"} onClick={() => setCharacter()} >New Character</Button>
        </Container>
    )
}

export default RandomCharacter;