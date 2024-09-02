import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";

function RandomCharacter() {
    const [race, setRace] = useState({});
    const [charClass, setCharClass] = useState({});
    const [background, setBackground] = useState({});

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
                const newRace = {
                    name: name
                }
                setRace(newRace)
        })
    }

    function setRandomClass() {
        fetch(`https://api.open5e.com/classes`)
            .then((r) => r.json())
            .then((data) => {
                // class
                const x = randomIndex(data.results)
                const className = data.results[x].name
                // archetype
                //// make archetype separate function
                const y = randomIndex(data.results[x].archetypes);
                const archetype = data.results[x].archetypes[y];
                const newCharClass = {
                    name: className,
                    archetype: {
                        name: archetype.name,
                        //// swap out double split() for regexp as separator, make separate function for trimming sentences?
                        desc: archetype.desc.split('##')[0].split('**')[0]
                    }
                }
                setCharClass(newCharClass)
        })
    }

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const desc = data.results[x].desc.split('**')[0]
                const newBackground = {
                    name: name,
                    desc: desc, 
                }
                setBackground(newBackground)
        })
    }

    function generateCharacter() {
        setRandomRace();
        setRandomClass();
        setRandomBackground();
    }
    
    return (
        <>
            <h2>Random Character Page</h2>
            <CharacterCard character={{
                race: race,
                charClass: charClass,
                background: background
            }} />
            <button onClick={generateCharacter} >New Character</button>
        </>
    )
}

export default RandomCharacter;



//// sample character:


// const character = {
//     charClass: {
//         name: "druid",
//         desc: "in touch with mother nach",
//         archetype: {
//             name: "Circle of the Moon",
//             desc: "wildshapes like a baddie, owlbear pounces"
//         }
//     },
//     race: {
//         name: "halfling"
//     },
//     background: {
//         name: "sage",
//         desc: "learning about the natural world to share with her circle!"
//     }
// }