import { useState } from 'react'

import ApartmentData from '../ApartmentData.json'
import ApartmentCard from './ApartmentCard.jsx'


const ApartmentsList = () => {

    const [apartments, setApartments] = useState(ApartmentData.results)

    const deleteApartment = apartmentIdToDelete => {
        const filteredApartments = apartments.filter(apartment => {
            return apartment.id != apartmentIdToDelete
        })

        setApartments(filteredApartments)
    }

    return (

        <section className='ApartmentsList'>

            <h2>Apartments list</h2>
            {
                apartments.map(apartment => {
                    return <ApartmentCard key={apartment.id} apartmentInfo={apartment} deleteApartment={deleteApartment} />
                })
            }

        </section>

    )

}

export default ApartmentsList