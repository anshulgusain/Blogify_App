
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
function Navbar() {

    return (
        <div id="Parent">

            <div id="Logo"><h1>Blogify</h1></div>
            <div id="Routes">
                <Link to="/"><h2>Home</h2></Link>
                <Link to="/edit"><h2>Edit</h2></Link>
                <Link to="/create"><h2>Create</h2></Link>
                <Link to="/login"><h2>Login</h2></Link>
            </div>


        </div>
    )
}

export default Navbar