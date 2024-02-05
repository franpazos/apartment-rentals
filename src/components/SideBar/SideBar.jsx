import './SideBar.css'

const SideBar = (props) => {

    const link = props.link
    const text = props.text

    return (
        <a href={link} className='button-sidebar'>{text}</a>
    )
}

export default SideBar