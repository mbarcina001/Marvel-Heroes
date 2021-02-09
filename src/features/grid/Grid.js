import Paginator from '../paginator/Paginator'
import './Grid.scss';

import Thumbnail from 'shared/thumbnail/Thumbnail';

export default function Grid({ list }) {

    return (
        <div>
            <div className="row">
                {list.map(elem => (
                    <div className="col-4" key={elem.id}>
                        <Thumbnail key={elem.id} name={elem.name} img={elem.thumbnail.path + '.' + elem.thumbnail.extension} />
                    </div>
                ))}
            </div>

            <Paginator />
        </div>
    )
}
