import "./Nav.css";

function Nav(){
    return(
        <div className="container">
            <div>
                <img src="" alt="logo"/>
            </div>
            <div>
                <input type="text" placeholder="Search"></input>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><button>Login</button></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>
        </div>

    );
}
export default Nav;