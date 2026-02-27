import "./Nav.css";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/cart.png";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
function Nav(){
    return(
        <div className="container">
            <div className="nav-left">
            <div>
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div>
               <div className="search-wrapper">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search" className="search" />
                </div>
            </div>
        </div>
        <div className="nav-right">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                   <li className="dropdown">
                            <a href="#" className="dropbtn">Cart ▾</a>
                            <div className="dropdown-content">
                                <a href="#">Cart</a>
                                <a href="#">Wishlist</a>
                            </div>
                        </li>
                    <li>
                        <Link to="/login"><button className="login">Login</button></Link></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>
            </div>
        </div>

    );
}
export default Nav;