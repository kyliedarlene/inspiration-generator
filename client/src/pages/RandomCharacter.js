import { useState, useEffect } from "react";

import CharacterCard from "../components/CharacterCard";

function RandomCharacter() {
    // const [race, setRace] = useState({});
    // const [charClass, setCharClass] = useState({});
    // const [background, setBackground] = useState({});
    const [raceName, setRaceName] = useState("");
    const [clsName, setClsName] = useState("");
    const [archName, setArchName] = useState("");
    const [archDesc, setArchDesc] = useState("");
    const [bkdName, setBkdName] = useState("");
    const [bkdDesc, setBkdDesc] = useState("");


    useEffect(() => {
        generateCharacter();
    }, []);
    
    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // function setRandomRace() {
    //     fetch(`https://api.open5e.com/races`)
    //         .then((r) => r.json())
    //         .then((data) => {
    //             const x = randomIndex(data.results)
    //             const name = data.results[x].name
    //             const newRace = {
    //                 name: name
    //             }
    //             setRace(newRace)
    //     })
    // }

    function setRandomRace() {
        fetch(`https://api.open5e.com/races`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                setRaceName(name)
        })
    }

    function setRandomClass() {
        fetch(`https://api.open5e.com/classes`)
            .then((r) => r.json())
            .then((data) => {
                // class
                const x = randomIndex(data.results)
                const className = data.results[x].name
                setClsName(className)
                // archetype
                //// make archetype separate function
                const y = randomIndex(data.results[x].archetypes);
                const archetype = data.results[x].archetypes[y];
                setArchName(archetype.name)
                setArchDesc(archetype.desc.split('##')[0].split('**')[0])
                }
        )
    }

    // function setRandomBackground() {
    //     fetch(`https://api.open5e.com/backgrounds`)
    //         .then((r) => r.json())
    //         .then((data) => {
    //             const x = randomIndex(data.results)
    //             const name = data.results[x].name
    //             const desc = data.results[x].desc.split('**')[0]
    //             const newBackground = {
    //                 name: name,
    //                 desc: desc, 
    //             }
    //             setBackground(newBackground)
    //     })
    // }

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const desc = data.results[x].desc.split('**')[0]
                setBkdName(name)
                setBkdDesc(desc)
        })
    }

    function generateCharacter() {
        setRandomRace();
        setRandomClass();
        setRandomBackground();
    }

    const character = {
        race_name: raceName,
        cls_name: clsName,
        arch_name: archName,
        arch_desc: archDesc,
        bkd_name: bkdName,
        bkd_desc: bkdDesc,
    }
    
    console.log(character)
    
    return (
        <>
            <h2>Random Character Page</h2>
            {/* <CharacterCard character={{
                race: race,
                charClass: charClass,
                background: background
            }} /> */}
            <CharacterCard character={character} />
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