import "./Thumbnail.scss"

function Thumbnail(props) {
    return (
        <div className="thumbnail">
            {
                props.img.indexOf("image_not_available") === -1 ?
                    <figure className="card" style={{"--image-src": "url(" + props.img + ")"}}></figure> :
                    <figure className="card --no-image" style={{"--image-src": "url(" + props.img + ")"}}></figure>
            }
            <p>{props.name}</p>
        </div>
    )
}

export default Thumbnail;