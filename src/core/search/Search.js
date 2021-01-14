import './Search.scss';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Search({ visible, setSearchTerm, handleClose }) {
    fontawesome.library.add(faSearch);

    const [searchInput, setSearchInput] = useState("");

    function handleChange (evt) {
        setSearchInput(evt.target.value);
    }

    function handleSearchClick() {
        setSearchTerm(searchInput);
    }

    return (
        <div className="search-pane" style={{display: visible ? 'block' : 'none'}}>
            <div className="close" onClick={handleClose}>&times;</div>
            <div className="search-bar">
                <form>
                    <div className="input-group mt-4 mb-1">
                        <input
                            name="searchInput"
                            className="form-control"
                            type="text"
                            value={searchInput}
                            onChange={handleChange}
                            aria-label="Enter search term"
                            placeholder="Enter search term"
                        />
                        <div className="input-group-append" onClick={handleSearchClick}>
                            <span className="input-group-text">
                                <FontAwesomeIcon icon="search" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
