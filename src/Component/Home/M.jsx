import './Home.css'

function M({image,body}) {

    return (
        <div>
             <figure>
                    <img src={image} alt="" />
                    <figcaption>{body} </figcaption>
                </figure>
        </div>
    )
}

export default M