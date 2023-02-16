import './Home.css'

function PopularPackage({image,body}) {

    return (
        <div>
             <figure>
                    <img src={image} alt="" />
                    <figcaption>{body} </figcaption>
                </figure>
        </div>
    )
}

export default PopularPackage