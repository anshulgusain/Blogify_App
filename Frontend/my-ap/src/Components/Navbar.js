
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useState } from 'react';
function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div id="Parent">

            <div id="Logo"><h1>Blogify</h1></div>
            
            <div id="Hamburger" onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            <div id="Routes" className={isMenuOpen ? 'open' : ''}>
            <Link to="/" onClick={toggleMenu}><h2>Home</h2></Link>
                <Link to="/edit" onClick={toggleMenu}><h2>Edit</h2></Link>
                <Link to="/create" onClick={toggleMenu}><h2>Create</h2></Link>
                <Link to="/login" onClick={toggleMenu}><h2>Login</h2></Link>
            </div>


        </div>
    )
}

export default Navbar