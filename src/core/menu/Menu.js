import './Menu.scss';
import { useContext } from 'react';
import * as Constants from 'app-constants';
import GridContext from 'context/GridContext';
import Search from 'core/search/Search';

export default function Menu () {
    const [ state, dispatch ] = useContext(GridContext);
    const { searchCategory } = state;
    const { GRID_STATE_ACTIONS, GRID_STATE_CATEGORIES } = Constants;

    function searchCategoryChange(category) {
        dispatch({
            type: GRID_STATE_ACTIONS.CATEGORY_CHANGE,
            value: category
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${searchCategory === GRID_STATE_CATEGORIES.CHARACTERS ? "active" : ""}`}>
                        <a className="nav-link" href="/#" onClick={ () => searchCategoryChange(GRID_STATE_CATEGORIES.CHARACTERS) }>Characters</a>
                    </li>
                    <li className={`nav-item ${searchCategory === GRID_STATE_CATEGORIES.COMICS ? "active" : ""}`}>
                        <a className="nav-link" href="/#" onClick={ () => searchCategoryChange(GRID_STATE_CATEGORIES.COMICS) }>Comics</a>
                    </li>
                    <li className={`nav-item ${searchCategory === GRID_STATE_CATEGORIES.CREATORS ? "active" : ""}`}>
                        <a className="nav-link" href="/#" onClick={ () => searchCategoryChange(GRID_STATE_CATEGORIES.CREATORS) }>Creators</a>
                    </li>
                    <li className={`nav-item ${searchCategory === GRID_STATE_CATEGORIES.EVENTS ? "active" : ""}`}>
                        <a className="nav-link" href="/#" onClick={ () => searchCategoryChange(GRID_STATE_CATEGORIES.EVENTS) }>Events</a>
                    </li>
                    <li className={`nav-item ${searchCategory === GRID_STATE_CATEGORIES.SERIES ? "active" : ""}`}>
                        <a className="nav-link" href="/#" onClick={ () => searchCategoryChange(GRID_STATE_CATEGORIES.SERIES) }>Series</a>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>
    )
}