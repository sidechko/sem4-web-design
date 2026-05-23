import './NavBar.css';
import logo from '../../assets/starshine.png'

function NavBar () {

    return (
        <nav id={'navbar'}>
            <a href={'/threads/0'} id={'logoContainer'}>
                <img id={'logo'} src={logo} alt="logo"/>
                <h1>Forum</h1>
            </a>
        </nav>
    )
}

export default NavBar