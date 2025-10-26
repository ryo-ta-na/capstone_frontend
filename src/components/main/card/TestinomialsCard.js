import './TestinomialsCard.css'

const TestinomialsCard = ({data}) => (
    <div className="testinomialCardContainer">
        {data.map(({rating, img, name, rvText}) => (
        <article key={name} className="testinomialCard">
            <h4>Rating: {rating}</h4>
            <div className='testinomialCardNameImg'>
                <h5>{name}</h5>
                <img src={img}/>
            </div>
            <p>{rvText}</p>
        </article>
        ))}
    </div>
);

export default TestinomialsCard;