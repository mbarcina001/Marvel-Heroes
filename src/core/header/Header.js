import './Header.scss';
import { ReactComponent as Logo } from 'assets/images/logo/MarvelLogo.svg'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    fontawesome.library.add(faSearch);

    return (
        <header>
            <Logo height="3.5em" width="8em" alt="logo"/>
            <h1>Heroes</h1>

            <div className="button" onClick={props.handleOpenSearchPane}>
                <FontAwesomeIcon icon="search" />
            </div>
        </header>
    );
}

export default Header;