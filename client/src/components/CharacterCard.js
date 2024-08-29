function CharacterCard({ character }) {

    return (
        <>
            <h3>Character Card</h3>
            <h4>Race: {character.race.name}</h4>
            <h4>Class: {character.charClass.name}</h4>
            <h4>Subclass: {character.charClass.archetype ? character.charClass.archetype.name : null} </h4>
            <h5>{character.charClass.archetype ? character.charClass.archetype.desc : null} </h5>
            <h4>Backround: {character.background.name}</h4>
            <h5>{character.background.desc}</h5>
        </>
    )
}

export default CharacterCard;