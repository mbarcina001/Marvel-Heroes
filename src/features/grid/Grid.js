import './Grid.scss';
import { useContext } from 'react';
import GridContext from 'context/GridContext';

import Thumbnail from 'shared/thumbnail/Thumbnail';
import Paginator from '../paginator/Paginator'

export default function Grid({ list }) {
    const [ state ] = useContext(GridContext);

    function getPaginator() {
        if (state.total > 1) {
            return <Paginator />
        }

        return null;
    }

    return (
        <div>
            <div className="row">
                {list.map(elem => (
                    <div className="col-4" key={elem.id}>
                        <Thumbnail key={elem.id} name={elem.name} img={elem.thumbnail.path + '.' + elem.thumbnail.extension} />
                    </div>
                ))}
            </div>

            { getPaginator() }
        </div>
    )
}
