import { Link } from 'react-router-dom'

import Nav from "./Nav"
import logo from '../icons_assets/Logo.jpg'

const Header = () => {
    return (
        <header>
            <div id='header' className='header'>
                <a href="#">
                    <Link to="/">
                        <img src={logo} alt="Little Lemon"/>
                    </Link>
                </a>
                <Nav />
            </div>
        </header>
    )
}

export default Header;