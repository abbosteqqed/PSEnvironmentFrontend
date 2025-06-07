import Link from 'next/link';
import React from 'react';


// const serviceListData = [
// 	{
// 		title: "Baghouse Conversions",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Engineering Evaluations",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Master Service Contracts",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Preventive Maintenance Plans",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Troubleshooting",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Inspections & Reports",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Maintenance Repairs",
// 		linkurl: "page-service-details"
// 	},
// 	{
// 		title: "Filter Bag Changeovers",
// 		linkurl: "page-service-details"
// 	},
// ];
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


                               <h2 id="engineering-evaluations" className="mt-4">Engineering Evaluations</h2>
                                <p className="fs-4">Comprehensive technical assessments to evaluate the performance, design, and compliance of your dust collection or filtration system.</p>
                                <br />
                                <p className="fs-4">• Airflow and velocity measurements</p>
                                <p className="fs-4">• Differential pressure diagnostics</p>
                                <p className="fs-4">• System performance modeling</p>
                                <p className="fs-4">• Emissions risk and OSHA/MACT compliance analysis</p>
                                <p className="fs-4">• Life cycle cost analysis and retrofit feasibility studies</p>

                               
                                </div> 

                                {/* <div className="content mt-40">
                                    <div className="text">
                                        <h3>Service Center</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
                                    </div>
                                    <div className="feature-list mt-4">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img className="mb-3 w-100" src="assets/images/resource/service-d1.jpg" alt="images" />
                                                <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <img className="mb-3 w-100" src="assets/images/resource/service-d2.jpg" alt="images" />
                                                <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="innerpage mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <Accordion />
                                </div> */}
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