import './Header.scss';
import { ReactComponent as Logo } from 'assets/images/logo/MarvelLogo.svg'

export default function Header() {

    return (
        <header>
            <Logo height="3.5em" width="8em" alt="logo"/>
            <h1>Heroes</h1>
        </header>
    );
}