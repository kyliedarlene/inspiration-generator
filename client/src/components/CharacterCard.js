import { Fragment, useEffect } from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'

import SaveCharacter from './SaveCharacter'
import classIcons from '../assets/class_icons/classIcons'

function CharacterCard({ character }) {

    // console.log(character)

    let card = (
        <Fragment>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    rolling character...
                </Typography>
            </CardContent>
        </Fragment>
    )

    // later: 
    // maybe use chip prop for race and bkd
    if(character) {
        card = (
            <Fragment>
                <CardActions>
                    <SaveCharacter character={character} />
                </CardActions>
    
                <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    image={classIcons[character['cls_name']]}
                    title="class icon"
                    alt="class"
                />
    
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, fontStyle: 'italic' }}>
                        {character['race_name']}
                    </Typography>

                    <Typography variant="h6" component="div">
                    {character['arch_name']}
                    </Typography>

                    <Typography variant="h5" component="div">
                    {character['cls_name']}
                    </Typography>
    
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {character.bkd_name}
                    </Typography>
                </CardContent>
            </Fragment>
        )
    }

    let detailCard

    if (character) {
        detailCard = (
            <Fragment>
                <CardContent>
                    
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                        {character['cls_name']}
                    </Typography>

                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16, fontStyle: 'italic' }}>
                        {character['arch_name']}
                    </Typography>

                    <Typography gutterBottom variant='body2' >
                        {character['arch_desc']}
                    </Typography>

                </CardContent>
            </Fragment>
        )
    }

    return(
        <Box sx={{ maxWidth: 300 }}>
            <Card sx={{height: 360}} variant="outlined">
                {character ? detailCard : card}
            </Card>
        </Box>
    )
}

export default CharacterCard;