import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";
import SaveCharacter from "../components/SaveCharacter";

function RandomCharacter() {
    const [race, setRace] = useState({name: ""})
    const [cls, setCls] = useState({name: "", slug: ""})
    const [archetype, setArchetype] = useState({name: "", desc: ""})
    const [background, setBackground] = useState({name: "", desc: ""})

    useEffect(() => generateCharacter(), []);

    const character = {
        race_name: race.name,
        cls_name: cls.name,
        arch_name: archetype.name,
        arch_desc: archetype.desc,
        bkd_name: background.name,
        bkd_desc: background.desc,
    }

    function generateCharacter() {
        setRandomRace();
        setRandomClass();
        setRandomBackground();
    }

    function setRandomRace() {
        fetch(`https://api.open5e.com/races`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                setRace({name: name})
            }
        )
    }

    function setRandomClass() {
        fetch(`https://api.open5e.com/classes`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const slug = data.results[x].slug
                setCls({name: name, slug: slug})
                setRandomArchetype(slug)
            }
        )
    }

    function setRandomArchetype(classSlug) {
        fetch(`https://api.open5e.com/classes/${classSlug}`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.archetypes)
                const name = data.archetypes[x].name
                const desc = data.archetypes[x].desc.split('**')[0].split('##')[0]
                // improvement: simplify split with regex ?
                setArchetype({name: name, desc: desc})
            })
    }

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const desc = data.results[x].desc.split('**')[0]
                setBackground({name: name, desc: desc})
        })
    }

    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
        
    return (
        <>
            <h2>Random Character Page</h2>
            <CharacterCard character={character} />
            <button onClick={generateCharacter} >New Character</button>
        </>
    )
}

export default RandomCharacter;