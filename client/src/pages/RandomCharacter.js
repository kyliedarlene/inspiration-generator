import { 
    useState, 
    useEffect 
} from "react";


function RandomCharacter() {
    const [race, setRace] = useState("race default");
    const [background, setBackground] = useState("background default")
    
    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    function setRandomRace() {
        fetch(`https://api.open5e.com/races`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const newRace = data.results[x].name
                setRace(newRace)
        })
    }

    function setRandomBackground() {
        fetch(`https://api.open5e.com/backgrounds`)
            .then((r) => r.json())
            .then((data) => {
                const x = randomIndex(data.results)
                const newBackground = data.results[x].name
                setBackground(newBackground)
        })
    }

    useEffect(() => {
        setRandomRace();
        setRandomBackground();
    }, []);

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
    
    return (
        <>
            <h2>Random Character Page</h2>
            <h4>Race: {race}</h4>
            <h4>Backround: {background}</h4>
        </>
    )
}

export default RandomCharacter;