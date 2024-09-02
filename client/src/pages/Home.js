import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h3>Heroes wanted! Let's create your custom D&D character.</h3>
            <Link to='/random-character'>
                <button>Roll Character!</button>
            </Link>
        </>
    )
}

export default Home;