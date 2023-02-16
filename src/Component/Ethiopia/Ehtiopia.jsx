import './Ethiopia.css'
import oryx from '../../assets/east african oryx.jpg'
import jegol from '../../assets/jegol.jpg'
import eruption from '../../assets/eruption.jpg'
import ethiopia from '../../assets/ethiopia.jpg'
import africa from '../../assets/african-woman.avif'

const Ethiopia = () => {
    return ( 
        <div className="ethiopia">
            <div className="ethio-head">
            <div className="ethio-topic">
                <h2 className="ethio">
                    ETHIOPIA
                </h2>
                <p className="ethio-land">Land of Origins.</p>
            </div>

            <img src={ethiopia} alt="ethiopia on a map" />
            </div>

            <p className="para1">
                Ethiopia is an ancient country whose unique cultural heritage, rich history and remarkable 
                biodiversity are reflected in a tally of nine UNESCO World Heritage Sites- more than any other 
                country in Africa. With its borders, you'll find the world's fourth-holiest Islamic city, 
                along with the oldest continously-occupied town south of the Shara.  
            </p>

            <p className="para2">
                Compelling antiquities include the medieval rock-hewn churches of Lalibela and Gheralta, palaces 
                and temples dating back 3,000 years, the magnificent 17th century castles of Gondar, and the oldest 
                human fossils unearthed anywhere on the planet. Add to this the beautiful Simien and Bale Mountains, 
                the spectacular volcanic landscapes of the Danakil Depression, and a wealth of mammals and birds 
                found nowhere else in the world, and it's little wonder that Ethiopia has become the most attractive and popular emergent tourist destination in Africa.
            </p>

            <div className="land">
                <h2>Land Of Origins.</h2>
                <img src={africa} alt="" />
                <p>
                As you explore Ethiopia, you will be put in touch with your own origins...for this is a Land of Origins
                </p>
            </div>

            <div className="things">
                <h2>Things To Do</h2>
                <p>
                From hiking and wildlife viewing to hot-air balloon trips and exploring museums, 
                Ethiopia offers limitless possibilities to outdoor enthusiasts and curious travellers.
                </p>
            </div>

            <div className="images">
            <figure>
                <img src={jegol} alt="Jegol-Wall-of-Harar" />
                <figcaption>HISTORICAL EXPERIENCE</figcaption>
            </figure>

            <figure>
                <img src={oryx} alt="east african oryx" />
                <figcaption>NATURAL EXPERIENCE</figcaption>
            </figure>
            
            <figure>
                <img src={eruption} alt="ertalle" />
                <figcaption>ADVENTURE</figcaption>
            </figure>
            </div>
        </div>
     );
}
 
export default Ethiopia;