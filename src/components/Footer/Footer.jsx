import './Footer.css'

const Footer = (props) => {

    const link = props.link
    const text = props.text

    return (
        <footer>
            <hr />
            <a href={link} className='link'>{text}</a>
        </footer>
    )
}

export default Footer