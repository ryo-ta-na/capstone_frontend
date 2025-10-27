import { Link, useNavigate } from 'react-router-dom'

import logo from "../icons_assets/Logo.jpg"
const Footer = () => {
    const navigate = useNavigate();

    const handleClickFooterLogo = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('header');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    }

    return (
        <div className="footerLogo">
            <button onClick={handleClickFooterLogo}>
                <img src={logo} />
            </button>
        </div>
    )
}

export default Footer;