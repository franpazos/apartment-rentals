import { Link } from "react-router-dom"

const ApartmentCard = props => {

    const apartment = props.apartmentInfo
    const deleteApartment = props.deleteApartment


    return (
        <article className="ApartmentCard">
            <img src={apartment.picture_url.url} alt="picture" />
            <ul>
                <h3>{apartment.name}</h3>

                <li><strong>Country:</strong> {apartment.country}</li>
                <li><strong>City:</strong> {apartment.city}</li>
                <li><strong>Price:</strong> {apartment.price} € per night</li>
                <li><strong>Property Type:</strong> {apartment.property_type}</li>
                <li><strong>Accommodates:</strong> {apartment.accommodates} people</li>
                <li><strong>Rating:</strong> {apartment.review_scores_rating}/100</li>
                <div className='btn-container'>
                    <button className='delete-btn' onClick={() => deleteApartment(apartment.id)}>Delete</button>
                    <Link to={`/detailspage/${apartment.id}`}><button className="details-btn">Show Details</button></Link>
                    <button className='edit-btn'>Edit</button>
                </div>

            </ul>


        </article>
    )
}

export default ApartmentCard


