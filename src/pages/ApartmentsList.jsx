import { useState } from 'react'
import ApartmentData from '../ApartmentData.json'
import ApartmentCard from './ApartmentCard.jsx'
import Form from './../components/Form/Form.jsx'


const ApartmentsList = () => {

    const [apartments, setApartments] = useState(ApartmentData.results)

    const deleteApartment = apartmentNameToDelete => {
        const filteredApartments = apartments.filter(apartment => {
            return apartment.name != apartmentNameToDelete
        })

        setApartments(filteredApartments)
    }

    const addNewApartment = newApartment => {
        const apartmentsCopy = [...apartments]
        apartmentsCopy.unshift(newApartment)
        setApartments(apartmentsCopy)
    }


    return (

        <div className="apartmentList">

            <section className='ApartmentsList'>

                <div className="divForm">
                    <Form addNewApartment={addNewApartment}> </Form>
                </div>

                <h2>Apartments list</h2>

                {
                    apartments.map(apartment => {
                        return <ApartmentCard key={apartment.id} apartmentInfo={apartment} deleteApartment={deleteApartment} />
                    })
                }

            </section>

        </div>
    )

}

export default ApartmentsList