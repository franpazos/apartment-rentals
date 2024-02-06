import { useState } from 'react'
import ApartmentData from '../../ApartmentData.json'
import ApartmentCard from './../ApartmentCard/ApartmentCard'
import './ApartmentsList.css'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(ApartmentData)
    const [showApartments, setShowApartments] = useState(true)

    const deleteApartment = apartmentIdToDelete => {
        const filteredApartment = apartments.filter(elm => {
            return elm.id != apartmentIdToDelete
        })

        setApartments(filteredApartment)
    }

    const handleApartmentsShow = () => setShowApartments(!showApartments)


    return (

        <section className='ApartmentsList'>

            <h2>Apartments list</h2>

            <button onClick={handleApartmentsShow}>{showApartments ? 'Hide' : 'Show'} apartments</button>

            {
                showApartments && apartments.results.map(apartment => {
                    return <ApartmentCard key={apartment.id} apartmentInfo={apartment} deleteApartment={deleteApartment} />
                })
            }

        </section>

    )

}

export default ApartmentsList