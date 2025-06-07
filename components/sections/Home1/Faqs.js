// import React, { useState } from 'react';
// import Link from 'next/link';

// const faqData = [
//     {
//         question: "Do you offer emergency repair services?",
//         answer: "Yes, we provide rapid emergency response services to minimize downtime and restore system functionality—especially for clients with Master Service Contracts."
//     },
//     {
//         question: "Can you help ensure compliance with regulations like OSHA and EPA?",
//         answer: "Absolutely. Our engineering evaluations include performance diagnostics and compliance analysis to help you meet OSHA, EPA, and MACT standards."
//     },
//     {
//         question: "What’s included in your preventive maintenance plans?",
//         answer: "Our PM plans include filter checks, leak testing, valve inspections, fan maintenance, gasket replacements, and scheduled filter change forecasts."
//     },
//     {
//         question: "Do you provide filter bags and replacement parts?",
//         answer: "Yes, we maintain a large inventory of filter bags and essential parts, ensuring quick delivery and proper fit for your system."
//     }
// ];

// function Faq() {
//     const [activeKey, setActiveKey] = useState(1);
//     const handleToggle = (key) => {
//         setActiveKey(prevKey => (prevKey === key ? null : key));
//     };
//     return (
//         <>

//         <section className="faq-one-area pt-130 pb-100">
//             {/* <div className="faq-one__bg">
//                 <img src="assets/images/faq/faq7.png" alt="FAQ Background" />
//             </div> */}
//             <div className="faq-one__image faq-one-left">
//                 <img className="animation__arryLeftRight" src="assets/images/faq/faq8.jpg" alt="FAQ Image" />
//             </div>
//             <div className="container">
//                 <div className="faq-one__wrp">
//                     <div className="row g-5 g-lg-4 justify-content-between">
//                         <div className="col-lg-4">
//                             <div className="faq-one-left">
//                                {/* <div className="section-header">
//                                     <h6 style={{ color: 'black' }}>FREQUENTLY ASKED QUESTIONS</h6>
//                                     <h2 className="wow splt-txt" data-splitting style={{ color: 'black' }}>
//                                         Wondering about something? Just ask us!
//                                     </h2>
//                                     <p
//                                         className="wow fadeInUp"
//                                         data-wow-delay="00ms"
//                                         data-wow-duration="1500ms"
//                                         style={{ color: 'black' }}
//                                     >
//                                         At PS Environmental, we’re committed to providing clear answers and expert guidance on all things related to dust collection,
//                                         filtration systems, and maintenance services. If you don’t see your question here, feel free to reach out—we’re just an email away!
//                                     </p>
//                                     </div> */}

//                                 {/* <Link href="/page-faq" className="btn-two wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="Browse More">
//                                     Browse More
//                                 </Link> */}
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <div className="faq-one__accordion">
//                                 <div className="section-header mb-30">
//                                     <h6>To know more about us</h6>
//                                     <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
//                                 </div>
//                                 <div className="accordion" id="accordionExample">
//                                     {faqData.map((faq, index) => (
//                                         <div className="accordion-item" key={index}>
//                                             <h2 className="accordion-header">
//                                                 <button
//                                                     className={`accordion-button ${activeKey === index ? '' : 'collapsed'}`}
//                                                     onClick={() => handleToggle(index)}
//                                                     type="button"
//                                                     aria-expanded={activeKey === index ? 'true' : 'false'}
//                                                     aria-controls={`collapse${index}`}
//                                                 >
//                                                     {faq.question}
//                                                 </button>
//                                             </h2>
//                                             <div
//                                                 id={`collapse${index}`}
//                                                 className={`accordion-collapse collapse ${activeKey === index ? 'show' : ''}`}
//                                                 data-bs-parent="#accordionExample"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <p>{faq.answer}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         </>
//     );
// }
// export default Faq;



import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
    {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we provide rapid emergency response services to minimize downtime and restore system functionality—especially for clients with Master Service Contracts."
    },
    {
        question: "Can you help ensure compliance with regulations like OSHA and EPA?",
        answer: "Absolutely. Our engineering evaluations include performance diagnostics and compliance analysis to help you meet OSHA, EPA, and MACT standards."
    },
    {
        question: "What’s included in your preventive maintenance plans?",
        answer: "Our PM plans include filter checks, leak testing, valve inspections, fan maintenance, gasket replacements, and scheduled filter change forecasts."
    },
    {
        question: "Do you provide filter bags and replacement parts?",
        answer: "Yes, we maintain a large inventory of filter bags and essential parts, ensuring quick delivery and proper fit for your system."
    }
];

function Faq() {
    const [activeKey, setActiveKey] = useState(0);

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    return (
        <section className="faq-section pt-130 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Image */}
                    <div className="col-lg-6">
                        <div className="faq-image text-center mb-4 mb-lg-0">
                            <img
                                className="img-fluid rounded shadow animation__arryLeftRight"
                                src="/assets/images/faq/faq4.png"
                                alt="FAQ Visual"
                            />
                        </div>
                    </div>

                    {/* Right FAQ Content */}
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="faq-content w-100">
                            <div className="section-header mb-4">
                                <h6 className="text-primary">To know more about us</h6>
                                <h2 className="mb-3">Frequently Asked Questions</h2>
                                <p>
                                    PS Environmental provides expert services in air pollution control and dust collection systems.
                                    If you don’t see your question here, feel free to reach out—we’re just an email away!
                                </p>
                            </div>

                            <div className="accordion" id="faqAccordion">
                                {faqData.map((faq, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${activeKey === index ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => handleToggle(index)}
                                                aria-expanded={activeKey === index}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            className={`accordion-collapse collapse ${activeKey === index ? 'show' : ''}`}
                                        >
                                            <div className="accordion-body">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <Link href="/page-faq" className="btn btn-primary mt-4">Browse More</Link> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Add custom styling */}
            <style jsx>{`
                .faq-section {
                    background-color: #f9f9f9;
                }
                .accordion-button {
                        font-weight: 600;
                        background-color: #f9f9f9; /* Set question background */
                        border: none; /* Optional: remove border if needed */
                    }

                    .accordion-button.collapsed {
                        background-color: #f9f9f9; /* Keep same bg when collapsed */
                    }
                .accordion-body {
                    font-size: 0.95rem;
                    color: #444;
                    background-color: #f9f9f9;
                }
            `}</style>
        </section>
    );
}

export default Faq;
