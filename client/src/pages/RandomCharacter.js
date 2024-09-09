import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";

import {
    Button,
    Container,
} from '@mui/material'
import { flex } from '@mui/system';


function RandomCharacter() {
    const [character, setCharacter] = useState()

    useEffect(() => {
        if(!character) {
            generateCharacter()
                .then((char) => {
                    setCharacter(char)
                })
        }
    }, [character])

    console.log(character)

    async function generateCharacter() {
        const [race, cls, bkd] = await Promise.all([
            getRandomAttribute('races'),
            getRandomAttribute('classes'),
            getRandomAttribute('backgrounds')
        ])

        const arch = selectRandomItem(cls.archetypes)

        const newCharacter = ({
            race_name: race.name,
            cls_name: cls.name,
            arch_name: arch.name,
            arch_desc: arch.desc.split(/(\*\*|##)/)[0],
            bkd_name: bkd.name,
            bkd_desc: bkd.desc.split(/(\*\*)/)[0],
        })

        return newCharacter;
    }

    async function getRandomAttribute(endpoint) {
        try {
            // fetch data
            const response = await fetch(`https://api.open5e.com/${endpoint}`);
            const data = await response.json();
            // select random attribute
            const attribute = selectRandomItem(data.results)
            // return race
            return attribute;
        }
        catch (error) {
            console.error(`Error fetching ${endpoint}: `, error)
            return null
        }
    }

    function selectRandomItem(array) {
        const x = Math.floor(Math.random() * array.length);
        return array[x]
    }
        
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