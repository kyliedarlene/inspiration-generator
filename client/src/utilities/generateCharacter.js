const restrictedRaces = ["Darakhul", "Alseid", "Derro", "Erina", "Satarre", "Shade"]
const noSubraceRaces = ["Dragonborn", "Half-Elf", "Half-Orc", "Human", "Tiefling"]

async function generateCharacter() {
    const [race, cls, bkd] = await Promise.all([
        getRandomAttribute(
            'races', 
            (race, r=restrictedRaces) => (r.includes(race['name']))
            ),
        getRandomAttribute('classes'),
        getRandomAttribute('backgrounds')
    ])

    const arch = selectRandomItem(cls.archetypes)

    const character = ({
        race_name: race.name,
        cls_name: cls.name,
        arch_name: arch.name,
        arch_desc: arch.desc.split(/(\*\*|##)/)[0],
        bkd_name: bkd.name,
        bkd_desc: bkd.desc.split(/(\*\*)/)[0],
    })

    return character;
}

async function getRandomAttribute(endpoint, isRestricted = (attribute) => (false)){
    try {
        const response = await fetch(`https://api.open5e.com/${endpoint}`);
        const data = await response.json();
        let attribute;
        do {
            attribute = selectRandomItem(data.results)
        } 
        while (isRestricted(attribute))
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

export default generateCharacter;