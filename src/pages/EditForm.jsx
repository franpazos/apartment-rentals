import { useState } from 'react';
import { Link } from 'react-router-dom';

const EditForm = ({ apartment, handleSave }) => {
    // Assuming 'apartment' is passed as a prop to the component
    const [img, setImg] = useState(apartment ? apartment.picture_url.url : '');
    const [name, setName] = useState(apartment ? apartment.name : '');
    const [country, setCountry] = useState(apartment ? apartment.country : '');
    const [city, setCity] = useState(apartment ? apartment.city : '');
    const [price, setPrice] = useState(apartment ? apartment.price : 0);
    const [propertyType, setPropertyType] = useState(apartment ? apartment.property_type : '');
    const [accommodates, setAccommodates] = useState(apartment ? apartment.accommodates : 0);
    const [rating, setRating] = useState(apartment ? apartment.review_scores_rating : 0);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const editedApartment = {
            picture_url: {
                url: img,
            },
            name,
            country,
            city,
            price,
            property_type: propertyType, // assuming your JSON property is named 'property_type'
            accommodates,
            review_scores_rating: rating, // assuming your JSON property is named 'review_scores_rating'
        };

        handleSave(editedApartment);
    };

    return (
        <div className="form">
            <h2>Edit Apartment</h2>
            <form onSubmit={handleFormSubmit}>
                <label className="formTag">
                    <p>Image:</p>
                    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Name:</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Country:</p>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>City:</p>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Price:</p>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Property type:</p>
                    <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Accommodates:</p>
                    <input type="number" value={accommodates} onChange={(e) => setAccommodates(e.target.value)} />
                </label>
                <label className="formTag">
                    <p>Rating:</p>
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                </label>
                <label>
                    <input type="submit" className="add-btn" value="Save Changes" />
                </label>
            </form>
            <div className="btn-container">
                <Link to="/">
                    <button className="home-btn">Cancel</button>
                </Link>
            </div>
        </div>
    );
};

export default EditForm;
