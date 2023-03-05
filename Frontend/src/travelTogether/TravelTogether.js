import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import axios from 'axios'

import './Service.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'


const TravelTogether = () => {
    const [groupSize, setGroupSize] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [interests, setInterests] = useState('');
    const [genderPreference, setGenderPreference] = useState('');
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [duration, setDuration] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/match', {
                location,
                interests,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div id='homepage'>
            <Header />
            <div>
                <h2>Find a Travel Companion</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="groupSize">Group Size:</label>
                    <input
                        type="number"
                        id="groupSize"
                        value={groupSize}
                        onChange={(e) => setGroupSize(e.target.value)}
                    />
                    <br />
                    <label htmlFor="ageGroup">Age Group:</label>
                    <input
                        type="text"
                        id="ageGroup"
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                    />
                    <br />
                    <label htmlFor="interests">Interests:</label>
                    <input
                        type="text"
                        id="interests"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                    />
                    <br />
                    <label htmlFor="genderPreference">Gender Preference:</label>
                    <select
                        id="genderPreference"
                        value={genderPreference}
                        onChange={(e) => setGenderPreference(e.target.value)}
                    >
                        <option value="">Any</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <br />
                    <label htmlFor="dateTime">Date/Time:</label>
                    <input
                        type="datetime-local"
                        id="dateTime"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                    <br />
                    <label htmlFor="duration">Duration (in days):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <br />
                    <button type="submit">Find Matches</button>
                </form>
                {/* display matching results */}
            </div>
            <Footer />
        </div>
    )
}

export default TravelTogether