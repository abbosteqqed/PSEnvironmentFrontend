import Link from 'next/link';
import React from 'react';
// import Accordion from '../elements/Accordion';


const serviceListData = [
    { title: "Baghouse Conversions", linkurl: "#baghouse-conversions" },
    { title: "Engineering Evaluations", linkurl: "#engineering-evaluations" },
    { title: "Master Service Contracts", linkurl: "#master-service-contracts" },
    { title: "Preventive Maintenance Plans", linkurl: "#preventive-maintenance" },
    { title: "Troubleshooting", linkurl: "#troubleshooting" },
    { title: "Inspections & Reports", linkurl: "#inspections-reports" },
    { title: "Maintenance Repairs", linkurl: "#maintenance-repairs" },
    { title: "Filter Bag Changeovers", linkurl: "#filter-bag-changeovers" },
];

function ServiceDetails (){
    return (
        <>

        <section className="services-details position-relative overflow-hidden pt-120 pb-120">
            <div className="container-lg">
                <div className="offer__wrp">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="sidebar-service-list">										
                                        <ul>
                                            {serviceListData.map((eachitem, servicelist) => (
                                                <li key={servicelist}><Link className={(servicelist === 0) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right" /><span>{eachitem.title}</span></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="service-details-help">
                                        <div className="help-shape-1" />
                                        <div className="help-shape-2" />
                                        <h2 className="help-title">Contact with <br /> us for any <br /> advice</h2>
                                        <div className="help-icon">
                                            <span className="fa-regular fa-headset" />
                                        </div>
                                        <div className="help-contact">
                                            <p>Need help? Talk to an expert</p>
                                            <Link href="/">(310) 373-6259</Link>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget service-sidebar-single mt-4">
                                        <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                            <Link href="/" className="theme-btn btn-one d-flex align-items-center"><span className="fas fa-file-pdf opacity-100" /> download pdf file</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content position-relative overflow-hidden px-3">
                                <img className="w-100" src="assets/images/service/service1.jpg" alt="" />
                                <div style={{ color: 'black' }}>


                            <h2 id="maintenance-repairs" className="mt-4">Maintenance Repairs</h2>
								<p className="fs-4">On-call or scheduled repairs to restore functionality and maintain peak performance of your dust collection system.</p>
								<br />
								<p className="fs-4">• Damper, fan, and motor replacements</p>
								<p className="fs-4">• Pulse jet system component repairs</p>
								<p className="fs-4">• Structural and weld repairs</p>
								<p className="fs-4">• Door seal, gasket, and cage replacements</p>
								<p className="fs-4">• Emergency response for breakdowns</p>

                               
                                </div> 

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default ServiceDetails;