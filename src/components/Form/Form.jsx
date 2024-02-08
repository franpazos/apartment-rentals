import { useState } from "react"



const Form = ({ addNewApartment }) => {

    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [price, setPrice] = useState(0)
    const [propertyType, setPropertyType] = useState("")
    const [accommodates, setAccommodates] = useState(0)
    const [rating, setRating] = useState(0)

    const handlmgChange = event => setImg(event.target.value)
    const handNameChange = event => setName(event.target.value)
    const handCountryChange = event => setCountry(event.target.value)
    const handCityChange = event => setCity(event.target.value)
    const handPriceChange = event => setPrice(event.target.value)
    const handPropertyTypeChange = event => setPropertyType(event.target.value)
    const handAccommodatesChange = event => setAccommodates(event.target.value)
    const handRatingChange = event => setRating(event.target.value)


    const handleFormSubmit = event => {
        event.preventDefault()

        const newApartment = {
            picture_url: {
                url: img
            },
            name: name,
            country: country,
            city: city,
            price: price,
            propertyType: propertyType,
            accommodates: accommodates,
            rating: rating,
        }
        addNewApartment(newApartment)
    }

    return (
        <div className="form">
            <h2>New apartment</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Image:
                    <input type="text" value={img} onChange={handlmgChange}></input>

                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handNameChange}></input>
                </label>

                <label>
                    Country:
                    <input type="text" value={country} onChange={handCountryChange} ></input>
                </label>

                <label>
                    City:
                    <input name="text" value={city} onChange={handCityChange}></input>
                </label>

                <label>
                    Price:
                    <input type="number" value={price} onChange={handPriceChange}></input>
                </label>

                <label>
                    Property type:
                    <input type="text" value={propertyType} onChange={handPropertyTypeChange} ></input>
                </label>

                <label>
                    Accommodates:
                    <input type="number" value={accommodates} onChange={handAccommodatesChange}></input>
                </label>

                <label>
                    Rating:
                    <input type="number" value={rating} onChange={handRatingChange}></input>
                </label>
                <label>
                    <input type="submit" />
                </label>



            </form>
        </div>
    )
}
export default Form