import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import axios from 'axios'

import './Service.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'


const TravelTogether = () => {

    const [groupSize, setGroupSize] = useState(0);
    const [ageGroupFrom, setAgeGroupFrom] = useState(0);
    const [ageGroupTill, setAgeGroupTill] = useState(0);
    const [interests, setInterests] = useState('');
    const [gender, setGender] = useState('');
    const [genderPreference, setGenderPreference] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableTill, setAvailableTill] = useState('');

    const [matches, setMatches] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/travel', {
                name,
                email,
                groupSize,
                ageGroupFrom,
                ageGroupTill,
                location,
                interests,
                gender,
                genderPreference,
                availableFrom,
                availableTill
            });
            console.log(response.data);
            alert("Submitted succesfully")
            const response2 = await axios.post('/findtraveler', {
                groupSize,
                ageGroupFrom,
                ageGroupTill,
                location,
                interests,
                gender,
                genderPreference,
                availableFrom,
                availableTill
            });
            console.log(response2.data);
            setMatches(response2.data)
        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div id='homepage'>
            <Header />
            <div className='container' style={{ marginTop: '10rem' }}>
                <h2 className='px-5 mb-5'>Find a Travel Companion</h2>
                <form onSubmit={handleSubmit} className="row px-5">
                    <div className='form-group col-12 px-5'>
                        <label htmlFor="name">Enter Name:</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <div className='form-group col-12 px-5'>
                        <label htmlFor="email">Enter Email:</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <div className='form-group col-12 px-5'>
                        <label htmlFor="groupSize">Preferred Group Size:</label>
                        <input
                            type="number"
                            id="groupSize"
                            onChange={(e) => setGroupSize(e.target.value)}
                            className="form-control ps-3" required
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="ageGroupFrom">Age Group From:</label>
                        <input
                            type="number"
                            id="ageGroupFrom"
                            onChange={(e) => setAgeGroupFrom(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="ageGroupTill">Age Group Till:</label>
                        <input
                            type="number"
                            id="ageGroupTill"
                            onChange={(e) => setAgeGroupTill(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="interests">Interests:</label>
                        <textarea
                            id="interests"
                            rows='5'
                            onChange={(e) => setInterests(e.target.value.split('\n'))}
                            required
                            className='form-control ps-3'
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="gender">Your Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            onChange={(e) => setGender(e.target.value)} required className='form-control ps-3'
                        />
                    </div>
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="genderPreference">Gender Preference:</label>
                        <input
                            id="genderPreference"
                            type="text"
                            onChange={(e) => setGenderPreference(e.target.value)} required className='form-control ps-3'
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="location">Travel Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <br />
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="availableFrom">AvailableFrom:</label>
                        <input
                            type="date"
                            id="date1"
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <div className='form-group col-6 px-5'>
                        <label htmlFor="availableTill">AvailableTill:</label>
                        <input
                            type="date"
                            id="date1"
                            value={availableTill}
                            onChange={(e) => setAvailableTill(e.target.value)}
                            required className='form-control ps-3'
                        />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-success mt-5 col-3 py-1'>Find Matches</button>
                </form>
                {/* display matching results */}
                <div className='row'>
                    {console.log(matches)}
                    {matches && matches.availability &&  matches.availability.map((m) => {
                        {
                            console.log(m);
                            (m.email || m.email !== email) ?
                            <>
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">{m.name}</h5>
                                        <p class="card-text"></p>
                                        <a href="#" class="card-link">Chat</a>
                                    </div>
                                </div>
                            </> : <></>
                        }
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TravelTogether