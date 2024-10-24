import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Movie Explorer</h1>
            <nav>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/favorites" activeClassName="active">Favorites</NavLink>
            </nav>
        </header>
    );
};

export default Header;
