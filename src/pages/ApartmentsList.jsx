import { useState } from 'react'
import ApartmentData from '../ApartmentData.json'
import ApartmentCard from './ApartmentCard.jsx'
import Form from './../components/Form/Form.jsx'
import EditForm from './EditForm.jsx'


const ApartmentsList = () => {

    const [apartments, setApartments] = useState(ApartmentData.results)
    const [editApartmentData, setEditApartment] = useState()

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

    const handleEditChange = event => {
        const (value, name) = event.target
        setEditApartment({ ...editApartmentData, [name]: value })
    }

    const fillEditForm = apartmentId => {
        const selectedApartment = apartment.find(elm => elm.id === apartmentId)
        setEditApartment({ selectedApartment })
    }

    const editApartment = event => {

        prevent

        const updatedApartments = apartments.map(elm => {
            if (elm.id === editApartmentData.id) {
                return { title: ApartmentsData.name }
            }
        })
    }

    return (

        <div className="apartmentList">

            <section className='ApartmentsList'>

                <div className="divForm">
                    <Form addNewApartment={addNewApartment}> </Form>
                </div>

                <div className="editform">

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