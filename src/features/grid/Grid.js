import './Grid.scss';
import { useContext } from 'react';
import GridContext from 'context/GridContext';

import Thumbnail from 'shared/thumbnail/Thumbnail';
import Paginator from '../paginator/Paginator'

import * as Constants from 'app-constants';

export default function Grid({ list }) {
    const [ state ] = useContext(GridContext);
    const { total, searchCategory } = state;
    const { GRID_STATE_CATEGORIES } = Constants;

    function getPaginator() {
        if (total > 1) {
            return <Paginator />
        }

        return null;
    }

    function getDisplayElement(elem) {
        return searchCategory === GRID_STATE_CATEGORIES.COMICS || searchCategory === GRID_STATE_CATEGORIES.CHARACTERS ?
            <Thumbnail key={elem.id} id={elem.id} name={getElemName(elem)} img={getElemImg(elem)} /> :
            <p>{getElemName(elem)}</p>
    }

    function getElemName(elem) {
        switch (searchCategory) {
            case GRID_STATE_CATEGORIES.CHARACTERS:
                return elem.name;
            case GRID_STATE_CATEGORIES.CREATORS:
                return elem.fullName
            default:
                return elem.title;
        }
    }

    function getElemImg(elem) {
        return elem.thumbnail.path + '.' + elem.thumbnail.extension;
    }

    return (
        <div>
            <div className="row">
                {list.map(elem => (
                    <div className="col-4" key={elem.id}>
                        { getDisplayElement(elem) }
                    </div>
                ))}
            </div>

            { getPaginator() }
        </div>
    )
}
