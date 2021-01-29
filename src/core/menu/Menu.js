import { Link } from 'react-router-dom'

export default function Menu () {
    return (
        <div class="d-flex">
            <Link to="/characters">
                Characters
            </Link>
            
            <Link to="/comics">
                Comics
            </Link>
                
            <Link to="/creators">
                Creators
            </Link>
        </div>
    )
}