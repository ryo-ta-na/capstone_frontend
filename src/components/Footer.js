import { useNavigate } from 'react-router-dom'

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
        <footer>
            <div className="footerLogo">
                <button onClick={handleClickFooterLogo}>
                    <img src={logo} alt="Logo"/>
                </button>
            </div>
        </footer>
    )
}

export default Footer;