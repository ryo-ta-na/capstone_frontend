import homeIcon from '../../../icons_assets/home icon.svg'
import './SpecialsCard.css'

const SpecialsCard = (props) => {
    const menuList = props.menus
    return (
        <div className="specialsContainer">
        {menuList.map((item) =>
         (
            <article key={item.name} className="specialsArticle">
                <div className="specials">
                    <img src={item.img} className='specialsImg' />
                    <div className='specialsArticleTexts'>
                        <div className='specialsArticleTitle'>
                            <h4>{item.name}</h4>
                            <h5 className='specialsPrice'>{item.price}</h5>
                        </div>
                        <p>{item.description}</p>
                        <div className="SpecialsArticleOrder">
                            <h5>Order a delivery</h5>
                            <img src={homeIcon} />
                        </div>
                    </div>
                </div>
            </article>
        ))}
        </div>
        )}

export default SpecialsCard
;
