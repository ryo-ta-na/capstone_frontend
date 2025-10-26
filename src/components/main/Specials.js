import greekSalad from "../../icons_assets/greek salad.jpg";
import bruchetta from "../../icons_assets/bruchetta.jpg";
import lemonDessert from "../../icons_assets/lemon dessert.jpg";

import SpecialsCard from "./card/SpecialsCard";

const menus = [
    {
        name: "Greek salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: greekSalad,
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: bruchetta,
    },
    {
        name: "Greek salad",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img: lemonDessert,
    },
]

const Specials = () => {
    return (
        <div className="specials">
            <div className="titleAndButton">
                <h2>Specials</h2>
                <button type="submmit">Online Menu</button>
            </div>
            <SpecialsCard menus={menus} />
        </div>
    );
}

export default Specials;