import owners from "../../icons_assets/Mario and Adrian A.jpg"
import chef from "../../icons_assets/restaurant chef B.jpg"

const Description = () => {
    return (
        <div className="description">
            <div className="descriptionTexts">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <div className="descriptionImgs">
                <img src={owners}/>
                <img src={chef}/>
            </div>
        </div>
    );
}

export default Description;