import { Link } from 'react-router-dom'
import './Menu.scss';

export default function Menu () {
    return (
        <nav className="d-flex">
            <Link to="/characters">
                Characters
            </Link>
            
            <Link to="/comics">
                Comics
            </Link>
                
            <Link to="/creators">
                Creators
            </Link>
        </nav>
    )
}