import "./Thumbnail.scss"

export default function Thumbnail({ name, img }) {
    return (
        <div className="thumbnail">
            {
                img.indexOf("image_not_available") === -1 ?
                    <figure className="card" style={{"--image-src": "url(" + img + ")"}}></figure> :
                    <figure className="card --no-image" style={{"--image-src": "url(" + img + ")"}}></figure>
            }
            <p>{name}</p>
        </div>
    )
}
