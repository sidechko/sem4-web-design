import './NavBar.css';
import logo from '../../assets/starshine.png'

function NavBar () {
    return (
        <nav id={'navbar'}>
            <div id={'logoContainer'}>
                <img id={'logo'} src={logo} alt="logo"/>
                <h1>Forum</h1>
            </div>
        </nav>
    )
}

export default NavBar