import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const handleClickAbout = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    }

    const handleClickSpecials = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('specials');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    }

    const handleClickDescription = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('description');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 100);
    }

    return (
        <nav>
            <ul className="nav-ul">
                <li className="nav-li"><Link to="/" className='navLinkComponent'>Home</Link></li>
                <li className="nav-li"><button onClick={handleClickAbout}>About</button></li>
                <li className="nav-li"><Link to="/reservations" className='navLinkComponent'>Reservations</Link></li>
                <li className="nav-li"><button onClick={handleClickSpecials}>Specials</button></li>
                <li className="nav-li"><button onClick={handleClickDescription}>Description</button></li>
            </ul>
        </nav>
    );
}

export default Nav;