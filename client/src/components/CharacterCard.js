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
import classIcons from '../assets/class_icons/classIcons'

function CharacterCard({ character }) {

    const card = (
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
}

export default CharacterCard;