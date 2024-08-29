import { 
    useState, 
    useEffect 
} from "react";


function RandomCharacter() {
    const [race, setRace] = useState({});
    const [charClass, setCharClass] = useState({});
    const [background, setBackground] = useState({});
    
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
                const classDesc = data.results[x].desc
                // archetype
                const y = randomIndex(data.results[x].archetypes);
                const archetype = data.results[x].archetypes[y];
                const newCharClass = {
                    name: className,
                    desc: classDesc,
                    archetype: {
                        name: archetype.name,
                        desc: archetype.desc
                    }
                }
                setCharClass(newCharClass)
        })
    }

    // stretch: if adding reset for individual attributes, add setRandomArchetype()

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const name = data.results[x].name
                const desc = data.results[x].desc
                const newBackground = {
                    name: name,
                    desc: desc, 
                }
                setBackground(newBackground)
        })
    }

    useEffect(() => {
        setRandomRace();
        setRandomClass();
        setRandomBackground();
    }, []);
    
    console.log(charClass)

    return (
        <>
            <h2>Random Character Page</h2>
            <h4>Race: {race.name}</h4>
            <h4>Class: {charClass.name}</h4>
            <h4>Subclass: {charClass.archetype ? charClass.archetype.name : null} </h4>
            <h5>{charClass.archetype ? charClass.archetype.desc : null} </h5>
            <h4>Backround: {background.name}</h4>
            <h5>{background.desc}</h5>
        </>
    )
}

export default RandomCharacter;



// sample character:


    //     const twig = {
    //     class: {
    //         name: "druid",
    //         description: "in touch with mother nach",
    //         subclass: {
    //             name: "Circle of the Moon",
    //             description: "wildshapes like a baddie, owlbear pounces"
    //         }
    //     },
    //     race: {
    //         name: "halfling"
    //     },
    //     background: {
    //         name: "sage"
    //     }
    // }