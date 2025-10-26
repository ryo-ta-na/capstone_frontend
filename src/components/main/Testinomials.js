import TestinommialsCard from './card/TestinomialsCard'
import eye from "../../icons_assets/🦆 icon _eye_.svg"

const data = [
    {
        rating: 3.4,
        img: eye,
        name: "FirstName",
        rvText: "review text"
    },
    {
        rating: 3.8,
        img: eye,
        name: "FirstName",
        rvText: "review text"
    },
    {
        rating: 4.2,
        img: eye,
        name: "FirstName",
        rvText: "review text"
    },
    {
        rating: 4.1,
        img: eye,
        name: "FirstName",
        rvText: "review text"
    },
]

const Testinomials = () => {
    return (
        <div className="testinomials">
            <h2 className='tetsinomialsTitle'>Testinomials</h2>
            <TestinommialsCard data={data} />
        </div>
    );
}

export default Testinomials;