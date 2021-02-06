import './Search.scss';
import * as Constants from 'app-constants';
import GridContext from 'context/GridContext';

import { useContext } from 'react';


export default function Search() {
    const [ state, dispatch ] = useContext(GridContext);
    const { searchTerm } = state
    let searchInput = searchTerm;
    const { GRID_STATE_ACTIONS } = Constants;

    function handleChange (evt) {
        searchInput = evt.target.value;
    }

    function handleSearchClick() {
        dispatch({
            type: GRID_STATE_ACTIONS.CATEGORY_CHANGE,
            value: searchInput
        })
    }

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2" 
                name="searchInput"
                type="search"
                value={searchInput}
                onChange={handleChange}
                aria-label="Enter search term"
                placeholder="Enter search term"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => handleSearchClick()}>Search</button>
        </form>
        
    )
}
