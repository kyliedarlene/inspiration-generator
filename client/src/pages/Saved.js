import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from "../context/user";
import { SavedCharactersContext } from "../context/savedCharacters";
import CharacterCard from "../components/CharacterCard";

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


function Saved() {
    const {user} = useContext(UserContext)
    const {savedCharacters, setSavedCharacters} = useContext(SavedCharactersContext)
    const navigate = useNavigate();

    console.log(savedCharacters)

    //// doesn't work because user checkSession() hasn't finished updating user from app;
    //// user is null, so /saved redirects even if logged in

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [user])

    // useEffect(() => {
    //     if(!user) {
    //         navigate('/login') // possibly find a way to pass this a prop if Login takes a onLogin()
    //     }
    // }, [])
    // const [savedChars, setSavedChars] = useState([])

    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((u) => setSavedChars(u.characters))
    // }, [])

    // useEffect(() => setSavedChars(user.characters), [])

    // let characters;
    // if(user){
    //     characters = user.characters;
    // }
    // const characters = user.characters;

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