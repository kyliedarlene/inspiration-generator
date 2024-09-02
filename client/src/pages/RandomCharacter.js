import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";

function RandomCharacter() {
    const [race, setRace] = useState({name: ""})
    const [cls, setCls] = useState({name: ""})
    const [arch, setArch] = useState({name: "", desc: ""})
    const [bkd, setBkd] = useState({name: "", desc: ""})


    useEffect(() => {
        generateCharacter();
    }, []);
    
    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    function setRandomRace() {
        fetch(`https://api.open5e.com/races`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                setRace({name: name})
        })
    }

    function setRandomClass() {
        fetch(`https://api.open5e.com/classes`)
            .then((r) => r.json())
            .then((data) => {
                // class
                const x = randomIndex(data.results)
                const name = data.results[x].name
                setCls({name: name})
                // archetype
                //// make archetype separate function
                const y = randomIndex(data.results[x].archetypes);
                const archetype = data.results[x].archetypes[y];
                setArch({
                    name: archetype.name,
                    desc: archetype.desc.split('##')[0].split('**')[0]
                })
                }
        )
    }

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const desc = data.results[x].desc.split('**')[0]
                setBkd({name: name, desc: desc})
        })
    }

    function generateCharacter() {
        setRandomRace();
        setRandomClass();
        setRandomBackground();
    }

    const character = {
        race_name: race.name,
        cls_name: cls.name,
        arch_name: arch.name,
        arch_desc: arch.desc,
        bkd_name: bkd.name,
        bkd_desc: bkd.desc,
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