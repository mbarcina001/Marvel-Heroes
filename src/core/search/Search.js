import './Search.scss';
import * as Constants from 'app-constants';
import GridContext from 'context/GridContext';

import { useState, useContext } from 'react';


export default function Search() {
    const [ state, dispatch ] = useContext(GridContext);
    const { searchTerm, searchMode } = state
    const [ searchInput, setSearchInput ] = useState(searchTerm);
    const [ searchModeInput, setSearchModeInput ] = useState(searchMode);
    const { GRID_STATE_ACTIONS, GRID_STATE_SEARCH_MODES } = Constants;

    function handleChange (evt) {
        setSearchInput(evt.target.value);
    }

    function handleSearchModeChange(evt) {
        setSearchModeInput(evt.target.value)
    }

    function handleSearchClick(evt) {
        evt.preventDefault();
        dispatch({
            type: GRID_STATE_ACTIONS.SEARCH_TERM_CHANGE,
            value: searchInput
        })
        dispatch({
            type: GRID_STATE_ACTIONS.SEARCH_MODE_CHANGE,
            value: searchModeInput
        })
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={(evt) => handleSearchClick(evt)}>
            <select className="form-control mr-sm-2" value={searchModeInput} onChange={(evt) => handleSearchModeChange(evt)}>
                <option value={GRID_STATE_SEARCH_MODES.NAME_EQUAL}>Name equals</option>
                <option value={GRID_STATE_SEARCH_MODES.NAME_STARTS_WITH}>Name starts with</option>
            </select>
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
