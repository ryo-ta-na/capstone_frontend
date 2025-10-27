import { Link } from 'react-router-dom'

import restauranfood from "../../icons_assets/restauranfood.jpg"
import BookingPage from '../booking/BookingPage'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="aboutText">
                <h1 className="lemonColorText">Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="reservationButton">
                    <Link to='/reservations'>
                        <button >Reserve a table</button>
                    </Link>
                </div>
            </div>
            <img src={restauranfood} alt="Restaurant" />
        </div>
    );
}

export default About;