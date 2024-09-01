import React from "react";
import '../styles/SpeakerInfo.css'

const SpeakerInfo = () => {
    // const Speakerinfoimg1 = require("../assets/img/Speaker-info-img1.jpeg")
    // const Speakerinfoimg2 = require("../assets/img/Speaker-info-img2.jpeg")
    // const Speakerinfoimg3 = require("../assets/img/Speaker-info-img3.jpeg")
    // const Speakerinfoimg4 = require("../assets/img/Speaker-info-img4.jpeg")

    return (
        <>

            <div className="speaker-info-main">
                <div className="speaker-info-name">Bluetooth Speaker</div>
                <div className="speaker-info-motto">Hear how sounds should sound<span className="dot">.</span></div>
                <div className="speaker-info-divider"></div>
                <div className="speaker-info-speacilization">
                    {/* <img src={Speakerinfoimg1} /> */}
                    <img src="../src/assets/Speaker-info-img1.jpeg" style={{ width: "60px", height: "60px", top: "30px" }} alt="" />
                    <div>
                        <div className="speaker-info-speacilization-header">
                            {/* <img src={Speakerinfoimg2} /> */}
                            <img src="../src/assets/Speaker-info-img2.jpeg" alt="" />
                            <p className="speaker-speacifications">Accuracy And Reliability</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ultricies
                            rhoncus convallis so dales purus,
                            ornare. </p>
                    </div>
                    <div>
                        <div className="speaker-info-speacilization-header">
                            {/* <img src={Speakerinfoimg2} /> */}
                            <img src="../src/assets/Speaker-info-img2.jpeg" alt="" />
                            <p className="speaker-speacifications">Accuracy And Reliability</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ultricies
                            rhoncus convallis so dales purus,
                            ornare. </p>
                    </div>
                    <div>
                        <div className="speaker-info-speacilization-header">
                            {/* <img src={Speakerinfoimg3} /> */}
                            <img src="../src/assets/Speaker-info-img3.jpeg" alt="" />
                            <p className="speaker-speacifications">Wavelength Precision</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ultricies
                            rhoncus convallis so dales purus,
                            ornare. </p>
                    </div>
                    {/* <img src={Speakerinfoimg4} /> */}
                    <img src="../src/assets/Speaker-info-img4.jpeg" style={{ width: "60px", height: "60px", top: "30px" }} alt="" />

                </div>
                <button className="speaker-info-buy">Shop Now</button>
            </div>


        </>)


}

export default SpeakerInfo