import { Link } from "react-router-dom";

import { Button, Box } from '@mui/material';

function Home() {
    return (
        <>
            <h3>Heroes wanted! Let's create your custom D&D character.</h3>
            <Link to='/random-character'>
                <Button variant="contained">Roll Character!</Button>
            </Link>
        </>
    )
}

export default Home;