import React from 'react'
import ProgressBar from '../../elements/ProgressBar2';

function Consult() {
    const services = ["Innovative", "Analytics", "User Experience", "Promotion"];

    const progressData = [
        { title: "Project Complete", count: 55, duration: 0.55 },
        { title: "Happy Clients", count: 93, duration: 0.95 },
        { title: "Our Company Growth", count: 67, duration: 0.60 },
    ];

    return (
        <>

        <section id="about-menu" className="consult-area">
            <div className="row g-0">
                {/* Left Content */}
                <div className="col-xl-6 order-2 order-xl-1">
                    <div className="consult-left">
                        <div className="section-header">
                            <h2 className="wow splt-txt" data-splitting>
                               The Leader in Air Pollution Control & Baghouse Services
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">

PS Environmental Services, Inc. (PSE) offers baghouse and air pollution control services in California, Oregon, Washington, Nevada.
We provide solutions to all your environmental problems in industrial and commercial facilities.
                            </p>
                        </div>

                        {/* Service List */}
                        <div className="consult__service mt-60">
                            <ul className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <i className="fa-light fa-plus" /> {service}
                                    </li>
                                ))}
                            </ul>

                            {/* Experience Counter */}
                            <div className="consult-count wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="head">
                                    <h2><span>40</span>+</h2>
                                    <h5>Years of <br /> Experience</h5>
                                </div>
                                <p className="mt-50">
                                    as a baghouse company and are trusted by engineers and facilities in a wide range of industries, including steel, mining, power, cement, aluminum, and more. Under the leadership of our President, Joe Gaglione, our friendly workers look forward to supporting your facility.
                                </p>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="consult__experience mt-60 mb-60">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                Our Success
                            </h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                We are constantly evolving, learning, and enhancing our capabilities, and our growth is ongoing. 
                                Reaching the milestone of completing 200 projects is a testament to our progress.
                            </p>
                            {progressData.map((item, i) => (
                                <ProgressBar 
                                    key={i} 
                                    title={item.title} 
                                    count={item.count} 
                                    duration={item.duration} 
                                />
                            ))}
                        </div>

                        {/* Economic Graph */}
                        {/* <div className="consult__experience-bar">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                Our Economic Graph
                            </h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                We are ever-evolving, constantly learning, and enhancing our capabilities, with growth 
                                being a continuous journey. Reaching the milestone of completing 200 projects highlights.
                            </p>
                            <div className="image wow fadeInLeft mt-30" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <img src="assets/images/consult/experience-bar.png" alt="Economic Graph showing growth" />
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-xl-6 order-1 order-xl-2">
                    <div className="consult__image wow">
                        <img src="assets/images/consult/consult2.jpg" alt="Consultation Team" />
                        {/* <div className="icon">
                            <img className="animation__sunMove" src="assets/images/icon/consult-icon.png" alt="Consult Icon" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Consult;