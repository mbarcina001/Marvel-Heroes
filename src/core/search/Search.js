import './Search.scss';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Search(props) {
    fontawesome.library.add(faSearch);

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange (evt) {
        setSearchTerm(evt.target.value);
    }

    function handleSearchClick() {
        props.handleSearch(searchTerm);
    }

    return (
        <div className="search-pane" style={{display: props.visible ? 'block' : 'none'}}>
            <div className="close" onClick={props.handleClose}>&times;</div>
            <div className="search-bar">
                <form>
                    <div className="input-group mt-4 mb-1">
                        <input
                            name="searchTerm"
                            className="form-control"
                            type="text"
                            value={searchTerm}
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

export default Search;