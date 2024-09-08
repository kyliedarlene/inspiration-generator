import { Fragment } from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Button,
    Typography
} from '@mui/material'

import SaveCharacter from './SaveCharacter'
import Artificer from '../assets/class_icons/Artificer.png'

function CharacterCard({ character }) {

    const card = (
        <Fragment>
            
            <CardActions>

                <SaveCharacter character={character} />

            </CardActions>

            <CardMedia
                sx={{ height: 140 }}
                component="img"
                image={Artificer}
                title="class icon"
                alt="artificer icon"
            />

            <CardContent>
                
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {character.race_name}
                </Typography>

                <Typography variant="h5" component="div">
                {character.arch_name ? character.arch_name : null} {character.cls_name}
                </Typography>

                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {character.bkd_name}
                </Typography>

            </CardContent>

        </Fragment>
    )

    return(
        <Box sx={{ maxWidth: 300 }}>
            <Card align={'center'} sx={{height: 360}} variant="outlined">{card}</Card>
        </Box>
    )

    // return (
    //     <>
    //         <h4>Race: {character.race_name}</h4>
    //         <h4>Class: {character.cls_name}</h4>
    //         <h4>Subclass: {character.arch_name ? character.arch_name : null} </h4>
    //         <p>{character.arch_desc ? character.arch_desc : null} </p>
    //         <h4>Backround: {character.bkd_name}</h4>
    //         <p>{character.bkd_desc}</p>
    //     </>
    // )
}

export default CharacterCard;