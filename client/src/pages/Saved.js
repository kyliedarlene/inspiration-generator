import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import CharacterCard from "../components/CharacterCard";

function Saved() {
    const {user} = useContext(UserContext)
    // const [savedChars, setSavedChars] = useState([])

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((u) => setSavedChars(u.characters))
    // }, [])

    // useEffect(() => setSavedChars(user.characters), [])

    const characters = user.characters;

    function restructureChar(char) {
        return {
            race: {
                name: char.race_name,
            },
            charClass: {
                name: char.cls_name,
                archetype: {
                    name: char.arch_name,
                    desc: char.arch_desc
                }
            },
            background: {
                name: char.bkd_name,
                desc: char.bkd_desc
            }
        }
    }

    return(
        <>
            <h1>Saved Characters</h1>
            {characters ? 
                characters.map((char) => (
                        <CharacterCard key={char.id} character={restructureChar(char)} />
                ))
                : null
            }
        </>
    )

}

export default Saved;