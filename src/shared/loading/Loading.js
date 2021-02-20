import './Loading.scss';

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading() {
    fontawesome.library.add(faSpinner);

    return (
        <div className="overlay">
            <FontAwesomeIcon icon="spinner" spin/>
        </div>
    )
}