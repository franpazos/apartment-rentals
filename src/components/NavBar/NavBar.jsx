import './NavBar.css'
import logo from './../../assets/Images/logo.png'
import logoWords from './../../assets/Images/logo-words.png'


const NavBar = (props) => {
    const text = props.text
    return (
        <header className="NavBar">
            <img src={logo} alt="logo" />
            <h1>EcoHomes</h1>
        </header>
    )
}

export default NavBar