import './ApartmentCard.css'

const ApartmentCard = props => {

    const apartment = props.apartmentInfo
    const deleteApartment = props.deleteApartment


    return (
        <article className="ApartmentCard">
            <img src={apartment.picture_url.url} alt="picture" />
            <ul>
                <h3>{apartment.name}</h3>

                <li>Country: {apartment.country}</li>
                <li>City: {apartment.city}</li>
                <li>Price: {apartment.price}</li>
                <li>Property Type: {apartment.property_type}</li>
                <li>Accommodates: {apartment.accommodates}</li>
                <li>Rating: {apartment.review_scores_rating}</li>

            </ul>


        </article>
    )
}

export default ApartmentCard


