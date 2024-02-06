import './SideBar.css'

const SideBar = (props) => {

    const link = props.link
    const text = props.text

    return (
        <header className='SideBar'>

            <a href={link} className='button-sidebar'>{text}</a>

        </header>
    )
}

export default SideBar