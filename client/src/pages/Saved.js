import { useContext } from "react";

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import { SavedCharactersContext } from "../context/savedCharacters";
import CharacterCard from "../components/CharacterCard";

function Saved() {
    const {savedCharacters} = useContext(SavedCharactersContext)

    return(
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {savedCharacters.map((char) => (
                    <Grid key={char.id} size={4}>
                        <CharacterCard character={char} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )

}

export default Saved;