import { createContext, useState } from 'react';

const SavedCharactersContext = createContext();

function SavedCharactersProvider({ children }) {
    const [savedCharacters, setSavedCharacters] = useState([])
    const [characterToSave, setCharacterToSave] = useState(null)

    return(
        <SavedCharactersContext.Provider value={{
            savedCharacters, 
            setSavedCharacters, 
            characterToSave, 
            setCharacterToSave}}
        > {children}
        </SavedCharactersContext.Provider>
    )
}

export {SavedCharactersContext, SavedCharactersProvider}