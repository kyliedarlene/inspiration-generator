function CharacterCard({ character }) {

    return (
        <>
            <h3>Character Card</h3>
            <h4>Race: {character.race_name}</h4>
            <h4>Class: {character.cls_name}</h4>
            <h4>Subclass: {character.arch_name ? character.arch_name : null} </h4>
            <p>{character.arch_desc ? character.arch_desc : null} </p>
            <h4>Backround: {character.bkd_name}</h4>
            <p>{character.bkd_desc}</p>
        </>
    )
}

export default CharacterCard;