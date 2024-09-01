import React from "react";
import "../styles/Speakers.css"

const Speaker = () => {

    // const SpeakerImg1 = require("../assets/img/SpeakerImg1.jpeg")
    // const SpeakerImg2 = require("../assets/img/SpeakerImg2.jpeg")
    // const SpeakerImg3 = require("../assets/img/SpeakerImg3.jpeg")
    // const CarIcon = require("../assets/img/Car-icon.jpeg");

    return (
        <>
            <div className="speaker-main">

                <div className="speaker-image">
                    {/* <img src={SpeakerImg1} alt="Speaker-section-image" /> */}
                    <img src="../src/assets/SpeakerImg1.jpeg" alt="" />
                </div>

                <div className="speaker-info">
                    <div className="speaker-header">Bluetooth Speaker <span><img src="../assets/img/Car-icon.jpeg" alt="" /></span></div>
                    <div ><p className="speaker-motto">Uniting audience for 50 years</p> <span className="dot">.</span></div>
                    <div className="speaker-infos">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Ultricies rhoncus convallis so<br />dales purus, ornare. </div>
                    <div className="speaker-speacifications">
                        {/* <img src={SpeakerImg2} alt="Speaker-section-image" /> */}
                        <img src="../src/assets/SpeakerImg2.jpeg" alt="" />
                        <p>Clear Sound</p>
                        {/* <img src={SpeakerImg3} alt="Speaker-section-image" /> */}
                        <img src="../src/assets/SpeakerImg3.jpeg" alt="" />
                        <p>Patent Protected</p>
                    </div>
                    <p className="speaker-header">Read More</p>
                </div>

            </div>

        </>)
}

export default Speaker