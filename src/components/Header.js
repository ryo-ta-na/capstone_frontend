import Nav from "./Nav"
import logo from '../icons_assets/Logo.jpg'

const Header = () => {
    return (
        <>
            <div className='header'>
                <a href="#">
                    <img src={logo} alt="Little Lemon"/>
                </a>
                <Nav />
            </div>
        </>
    )
}

export default Header;