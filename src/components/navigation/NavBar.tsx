import './NavBar.css';
import logo from '../../assets/starshine.png'
import {Link} from "react-router-dom";

function NavBar () {

    return (
        <nav id={'navbar'}>
            <Link to={'/threads/0'} id={'logoContainer'}>
                <img id={'logo'} src={logo} alt="logo"/>
                <h1>Forum</h1>
            </Link>
        </nav>
    )
}

export default NavBar