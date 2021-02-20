import "./Thumbnail.scss"
import { Link } from 'react-router-dom';

export default function Thumbnail({ id, name, img }) {
    return (
        <Link to={`/detail/${id}`}>
            <div className="thumbnail">
                {
                    img.indexOf("image_not_available") === -1 ?
                        <figure className="card" style={{"--image-src": "url(" + img + ")"}}></figure> :
                        <figure className="card --no-image" style={{"--image-src": "url(" + img + ")"}}></figure>
                }
                <p>{name}</p>
            </div>
        </Link>
    )
}
