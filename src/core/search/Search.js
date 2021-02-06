import './Search.scss';
import * as Constants from 'app-constants';
import GridContext from 'context/GridContext';

import { useState, useContext } from 'react';


export default function Search() {
    const [ state, dispatch ] = useContext(GridContext);
    const { searchTerm } = state
    const [searchInput, setSearchInput] = useState(searchTerm);
    const { GRID_STATE_ACTIONS } = Constants;

    function handleChange (evt) {
        setSearchInput(evt.target.value);
    }

    function handleSearchClick(evt) {
        evt.preventDefault();
        dispatch({
            type: GRID_STATE_ACTIONS.CATEGORY_CHANGE,
            value: searchInput
        })
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={(evt) => handleSearchClick(evt)}>
            <input
                className="form-control mr-sm-2" 
                name="searchInput"
                type="search"
                value={searchInput}
                onChange={(evt) => handleChange(evt)}
                aria-label="Enter search term"
                placeholder="Enter search term"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={(evt) => handleSearchClick(evt)}>Search</button>
        </form>
        
    )
}
