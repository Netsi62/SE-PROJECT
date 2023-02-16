import './About.css'
import { Link } from 'react-router-dom'
import ethiopia from '../../assets/ethiopia.jpg'
import timket from '../../assets/timket.jpg'
import travel from '../../assets/travel.jpg'

const About = () => {
    return ( 
        <div className="about-us">
    <div className="about-head">
        <div className="about-topic">
            <h2 className="about">
                About Us
            </h2>
            <p>Discover your next travel destination.</p>
        </div>
        <img src={ethiopia} alt="ethiopia on a map" />
    </div>

    <p>TOUR.ET Helps you make the decision `where to go`?</p>

    <div className="rating">
    <img src={travel} alt="ethiopia on a map" />
    <p>See the ratings and review of destinations you wish to visit.</p>
    <p>Comments of others who've visited the place. Information about travel destination.</p>
    </div>

    <div className="group">
        <ul>
            <li>Different group packages to visit popular sites.</li>
            <li>Packages to visit popular holiday sites during popular holidays.</li>
        </ul>
        <img src={timket} alt="Timket holiday in Gondar" />
    </div>
    <div className="andMore">And More ....   <Link to="/register">Get started</Link></div>
</div>
     );
}
 
export default About;