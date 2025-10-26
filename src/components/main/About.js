import restauranfood from "../../icons_assets/restauranfood.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="aboutText">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>Reserve a table</button>
            </div>
            <img src={restauranfood} alt="Restaurant" />
        </div>
    );
}

export default About;