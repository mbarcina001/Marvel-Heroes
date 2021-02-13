import './Footer.scss';

import { useContext } from 'react';
import FooterContext from 'context/FooterContext';

export default function Footer() {

    const [ state ] = useContext(FooterContext);
    const htmlToInject = {
        '__html': state
    }

    return (
        <footer dangerouslySetInnerHTML={htmlToInject}></footer>
    );
}