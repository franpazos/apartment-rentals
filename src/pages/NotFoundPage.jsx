import error404 from "./../assets/Images/error404.png"

function NotFoundPage() {
    return (
        <div className="NotFound">
            <img src={error404} alt="Error 404 - Not Found" />
        </div>
    )
}

export default NotFoundPage