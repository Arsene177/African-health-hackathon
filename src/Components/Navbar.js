
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <NavLink to="/" activeClassName="active">Accueil</NavLink>
            <NavLink to="/registration">Register Doctor</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Donate">Donate</NavLink>
            
            
        </div>
    )
}

export default Navbar;