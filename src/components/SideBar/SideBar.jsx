import './SideBar.css'
import { Link } from 'react-router-dom'


const SideBar = () => {


    return (
        <section className="SideBar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </section>
    )
}

export default SideBar