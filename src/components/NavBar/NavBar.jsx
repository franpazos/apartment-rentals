import './NavBar.css'
import logo from './../../assets/logo.png'

const NavBar = (props) => {
    const text = props.text
    return (
        <header className="NavBar">
            <img src={logo} alt="logo" />
            <h1>{text}</h1>
        </header>
    )
}

export default NavBar