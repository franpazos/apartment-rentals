import { Navigate, useParams } from "react-router-dom"
import ApartmentData from "./../ApartmentData.json"

function DetailsPage() {
    const { apartment_id } = useParams()
    const foundApt = ApartmentData.results.find((apt) => {
        return apt.id === apartment_id
    })

    if (!foundApt) return <Navigate to="/popino" />

    return (
        <div className="details">
            <h2>Apartment Details from Home number: {apartment_id}</h2>
            <p>Home of {foundApt.host_name}, member since {foundApt.host_since}</p>
            <p>{foundApt.description}</p>
            <p>Accomodates {foundApt.accommodates} people</p>
            <p>Has {foundApt.bathrooms} bathrooms and {foundApt.bedrooms} bedrooms</p>
            <p>Has a cleaning fee of {foundApt.cleaning_fee} euros</p>
            <p>{foundApt.house_rules}</p>
            <p>{foundApt.space}</p>
        </div>
    )
}

export default DetailsPage