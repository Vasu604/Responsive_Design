import React, { useState } from 'react';
import "../styles/Car_upload.css"
// const Car_image = require("../assets/img/Car_upload.jpeg")

const Car_upload = () => {
    const [selectedOption, setSelectedOption] = useState('4 Days');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="form-container">
            {/* Car Upload Section */}
            <div className="car-upload-container">
                {/* <img src={Car_image} alt="" /> */}
                <img src="../src/assets/Car_upload.jpeg" alt="" />
                <p>Upload image</p>
            </div>



            <form className="form">
                <div className="step-indicator">
                    <h1>Start your free membership today!</h1>
                    <p>Just three quick and easy steps to get online.</p>
                    <div className="step-counter-main">
                        <div className="step-container">
                            <div className="step active">1</div>
                            <div className="step-label">Your Details</div>
                        </div>
                        <div className="step-container">
                            <div className="step">2</div>
                            <div className="step-label">Company Details</div>
                        </div>
                        <div class="step-container">
                            <div className="step">3</div>
                            <div className="step-label">Confirmation</div>
                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Type here" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Type here" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Type here" />
                </div>
                <div className="form-group">
                    <label>Preferred Duration</label>
                    <div className="radio-group">
                        <label className={`radio-label ${selectedOption === '4 Days' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="4 Days"
                                checked={selectedOption === '4 Days'}
                                onChange={handleOptionChange}
                                className="radio-input"
                            />
                            4 Days
                        </label>
                        <label className={`radio-label ${selectedOption === '2 Days' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                value="2 Days"
                                checked={selectedOption === '2 Days'}
                                onChange={handleOptionChange}
                                className="radio-input"
                            />
                            2 Days
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Type here" />
                </div>
                <button type="submit" className="next-button">Next</button>
            </form>
        </div>
    );
};

export default Car_upload;
