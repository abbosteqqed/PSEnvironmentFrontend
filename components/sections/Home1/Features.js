// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // FeatureItem component to handle the repeated structure for each feature item
// const FeatureItem = ({ icon, title, link, description }) => (
//     <div className="col-sm-6 col-lg-3">
//         <div className="feature__item">
//             <div className="bg-line">
//                 <Image src="/assets/images/shape/feature-item-shape.png" alt="shape" width={500} height={500} />
//             </div>
//             <div className="feature__icon">
//                 {icon}
//             </div>
//             <div className="feature__content">
//                 <h4>
//                     <Link className="hover-link" href={link}>
//                         {title}
//                     </Link>
//                 </h4>
//                 <p>{description}</p>
//             </div>
//             <Link href={link} className="arrow-btn">
//                 <i className="fa-light fa-arrow-right" />
//             </Link>
//         </div>
//     </div>
// );

// function Features() {
//     const features = [
//         {
//             icon: (
//                 <svg width="91" height="74" viewBox="0 0 91 74" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_131_10129)">
//                         <path
//                             d="M45.6823 74.0001C45.368 74.0001 45.0621 73.867 44.8388 73.6259L0.314609 25.0714C-0.0327193 24.6889 -0.0988771 24.1151 0.157484 23.6661L11.6772 3.04354C11.8839 2.67766 12.2644 2.44482 12.6778 2.44482H18.7313C19.368 2.44482 19.889 2.97702 19.889 3.63395C19.889 4.29087 19.368 4.82307 18.7313 4.82307H13.3477L2.58878 24.0819L45.6823 71.073L88.3954 24.1151L76.4126 4.83138H45.5004C44.8636 4.83138 44.3426 4.29919 44.3426 3.64226C44.3426 2.98533 44.8636 2.45314 45.5004 2.45314H77.0411C77.438 2.45314 77.8019 2.66103 78.0169 3.00197L90.8184 23.6245C91.0996 24.0819 91.05 24.6806 90.6861 25.0714L46.5258 73.6259C46.3025 73.867 45.9965 74.0001 45.6823 74.0001Z"
//                             fill="#121C27" />
//                         <path
//                             d="M65.0673 52.6874C64.7696 52.6874 64.4719 52.571 64.2486 52.3381L18.2773 4.47387C17.8307 4.0082 17.8307 3.25149 18.2855 2.79413C18.7404 2.33678 19.4681 2.33678 19.9229 2.80245L65.886 50.6667C66.3326 51.1324 66.3326 51.8891 65.8778 52.3464C65.6545 52.571 65.365 52.6874 65.0673 52.6874Z"
//                             fill="#121C27" />
//                         <path
//                             d="M37.0564 9.50465C34.5093 9.50465 32.4336 7.37587 32.4336 4.75647C32.4336 2.13708 34.5093 0.00830078 37.0564 0.00830078C39.6034 0.00830078 41.6791 2.13708 41.6791 4.75647C41.6874 7.37587 39.6117 9.50465 37.0564 9.50465ZM37.0564 2.37823C35.7828 2.37823 34.7408 3.44262 34.7408 4.75647C34.7408 6.07033 35.7746 7.13472 37.0564 7.13472C38.3299 7.13472 39.3719 6.07033 39.3719 4.75647C39.3719 3.44262 38.3382 2.37823 37.0564 2.37823Z"
//                             fill="#121C27" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_131_10129">
//                             <rect width="91" height="74" fill="white" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             ),
//             // title: "Baghouse Catalog",
//             // link: "/page-service-details",
//             // description: "Click here to view our complete catalog"
//              title: "Air Pollution Control & Baghouse Services",
//             link: (
//                 <a
//                 className="elementor-icon elementor-animation-"
//                 href="https://psenvironmental.com/wp-content/uploads/2021/12/2021-Baghouse-Catalogue.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                 <i aria-hidden="true" className="fas fa-book-open"></i>
//                 </a>
//             ),
//             description: "Click here to view our complete catalog"
//         },
//         {
//             icon: (
//                 <svg width="91" height="74" viewBox="0 0 91 74" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_131_10154)">
//                         <path
//                             d="M35.9189 74C35.6425 74 35.3735 73.887 35.1793 73.6837L0.306297 37.7645C0.11206 37.5611 0 37.2824 0 37.0038C0 36.7176 0.11206 36.4464 0.306297 36.2431L35.1793 0.316336C35.5902 -0.105445 36.2476 -0.105445 36.6585 0.316336L71.5315 36.2431C71.9424 36.6648 71.9424 37.3427 71.5315 37.7645L36.6585 73.6912C36.4568 73.887 36.1953 74 35.9189 74ZM2.52508 37.0038L35.9189 71.4091L69.3127 37.0038L35.9189 2.59847L2.52508 37.0038Z"
//                             fill="#121C27" />
//                         <path
//                             d="M62.9324 65.911C62.6634 65.911 62.3945 65.8056 62.1928 65.5947L53.1234 56.2553C52.7125 55.8335 52.7125 55.1556 53.1234 54.7338C53.5343 54.312 54.1917 54.312 54.6026 54.7338L62.9324 63.3126L88.4745 36.9964L62.9324 10.6878L36.6506 37.7647C36.2397 38.1865 35.5823 38.1865 35.1714 37.7647C34.7606 37.3429 34.7606 36.665 35.1714 36.2432L62.1928 8.40569C62.6037 7.98391 63.2611 7.98391 63.672 8.40569L90.6933 36.2432C91.1042 36.665 91.1042 37.3429 90.6933 37.7647L63.672 65.5947C63.4703 65.8056 63.2013 65.911 62.9324 65.911Z"
//                             fill="#121C27" />
//                         <path
//                             d="M29.2034 48.2185C26.9025 48.2185 25.0273 46.2904 25.0273 43.9179C25.0273 41.5453 26.9025 39.6172 29.2034 39.6172C31.5044 39.6172 33.3795 41.5453 33.3795 43.9179C33.3795 46.2904 31.5119 48.2185 29.2034 48.2185ZM29.2034 41.7638C28.053 41.7638 27.1117 42.7278 27.1117 43.9179C27.1117 45.1079 28.0455 46.0719 29.2034 46.0719C30.3614 46.0719 31.2952 45.1079 31.2952 43.9179C31.2952 42.7278 30.3539 41.7638 29.2034 41.7638Z"
//                             fill="#121C27" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_131_10154">
//                             <rect width="91" height="74" fill="white" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             ),
//             title: "Lab Testing Services",
//             link: "/page-service-details",
//             description: "Our lab-testing facility is equipped to detect problems with filter bags."
//         },
//         {
//             icon: (
//                 <svg width="72" height="74" viewBox="0 0 72 74" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_131_10179)">
//                         <path
//                             d="M36.038 74.0001C35.827 74.0001 35.6222 73.9127 35.4733 73.7629L0.236625 37.5431C-0.0736666 37.2248 -0.0736666 36.7067 0.236625 36.3884L35.405 0.237275C35.7153 -0.0810448 36.218 -0.0810448 36.5283 0.237275L71.7712 36.4571C72.0815 36.7754 72.0815 37.2934 71.7712 37.6118L36.6028 73.7567C36.4476 73.9127 36.249 74.0001 36.038 74.0001ZM1.9184 36.9627L36.0318 72.0278L70.077 37.0375L35.9698 1.97243L1.9184 36.9627Z"
//                             fill="#121C27" />
//                         <path
//                             d="M35.3855 53.0217C35.1807 53.0217 34.9759 52.9406 34.8208 52.7846L22.7132 40.3389C22.4029 40.0206 22.4029 39.5025 22.7132 39.1842L31.6744 29.9716C31.9847 29.6533 32.4874 29.6533 32.7977 29.9716C33.1079 30.29 33.1079 30.808 32.7977 31.1263L24.4012 39.7647L35.3855 51.0494L60.1157 25.6338C60.426 25.3154 60.9287 25.3154 61.239 25.6338C61.5493 25.9521 61.5493 26.4701 61.239 26.7884L35.9502 52.7846C35.7951 52.9406 35.5903 53.0217 35.3855 53.0217Z"
//                             fill="#121C27" />
//                         <path
//                             d="M36.4857 28.9918C35.7906 28.9918 35.0894 28.7171 34.5557 28.1741C33.4945 27.0818 33.4945 25.3092 34.5557 24.217C35.6169 23.1247 37.3483 23.1309 38.4095 24.2232C38.9246 24.7537 39.21 25.4528 39.21 26.2018C39.21 26.9508 38.9308 27.6561 38.4157 28.1804C37.8758 28.7171 37.1807 28.9918 36.4857 28.9918ZM36.4795 25.0284C36.1878 25.0284 35.9023 25.1407 35.6789 25.3654C35.2383 25.8211 35.2383 26.5576 35.6851 27.0132C36.1257 27.4688 36.8456 27.4688 37.2862 27.0132C37.4972 26.7947 37.6151 26.5014 37.6151 26.1893C37.6151 25.8772 37.4972 25.5839 37.28 25.3654C37.0566 25.147 36.7649 25.0284 36.4795 25.0284Z"
//                             fill="#121C27" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_131_10179">
//                             <rect width="72" height="74" fill="white" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             ),
//             title: "Certified by OSHA & MSHA",
//             link: "/page-service-details",
//             description: "We are proud to be a member of and certified by OSHA (Occupational Safety and Health Administration) and MSHA (Mine Safety and Health Administration). Additionally, we are a member — Avetta & ISN Auditors"
//         },
//         {
//             icon: (
//                 <svg width="74" height="74" viewBox="0 0 74 74" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0_131_10200)">
//                         <path
//                             d="M1.17264 70.7183C0.529012 70.7183 0 70.2025 0 69.5681V1.1498C0 0.701573 0.264506 0.29563 0.678899 0.101115C1.10211 -0.0849417 1.58704 -0.0172846 1.93971 0.278715L37.0044 29.5489L72.0603 0.278715C72.554 -0.135685 73.2946 -0.0764846 73.7179 0.405573C74.1411 0.88763 74.0794 1.61494 73.5856 2.02934L37.7627 31.9423C37.3218 32.3059 36.6782 32.3059 36.2373 31.9423L2.3541 3.64466V69.5681C2.3541 70.2025 1.82509 70.7183 1.17264 70.7183Z"
//                             fill="#121C27" />
//                         <path
//                             d="M72.8177 70.5411C72.1653 70.5411 71.6451 70.0252 71.6451 69.3909V17.3456L37.7618 45.6348C37.321 45.9984 36.6774 45.9984 36.2365 45.6348L7.92554 21.9971C7.4318 21.5827 7.37008 20.8553 7.79329 20.3733C8.2165 19.8912 8.95712 19.832 9.45086 20.2464L37.0036 43.2499L72.0683 13.9797C72.421 13.6837 72.9059 13.6245 73.3203 13.8105C73.7347 13.9966 73.9992 14.4025 73.9992 14.8592V69.3993C73.9992 70.0252 73.4702 70.5411 72.8177 70.5411Z"
//                             fill="#121C27" />
//                         <path
//                             d="M72.8179 70.5411H36.9949C36.3425 70.5411 35.8223 70.0252 35.8223 69.3909C35.8223 68.7566 36.3513 68.2407 36.9949 68.2407H72.8179C73.4703 68.2407 73.9905 68.7566 73.9905 69.3909C73.9905 70.0252 73.4703 70.5411 72.8179 70.5411Z"
//                             fill="#121C27" />
//                         <path
//                             d="M29.0783 74C26.4861 74 24.3789 71.9365 24.3789 69.3909C24.3789 66.8453 26.4861 64.7817 29.0783 64.7817C31.6705 64.7817 33.7777 66.8453 33.7777 69.3909C33.7777 71.9365 31.6705 74 29.0783 74ZM29.0783 67.0905C27.7822 67.0905 26.7242 68.1223 26.7242 69.3909C26.7242 70.6595 27.7822 71.6912 29.0783 71.6912C30.3744 71.6912 31.4324 70.6595 31.4324 69.3909C31.4324 68.1223 30.3744 67.0905 29.0783 67.0905Z"
//                             fill="#121C27" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_131_10200">
//                             <rect width="74" height="74" fill="white" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             ),
//             title: "Filter Bag Change-Outs & Troubleshooting",
//             link: "/page-service-details",
//             description: "Leave you filter bag change-outs to us. We have over three decades of experience changing out filter bags in commercial facilities across the state."
//         }
//     ];

//     return (
//         <>

//         <section id="feature-menu" className="feature-area pb-130">
//             <div className="feature__wrp">
//                 <div className="row g-0">
//                     {features.map((feature, index) => (
//                         <FeatureItem
//                             key={index}
//                             icon={feature.icon}
//                             title={feature.title}
//                             link={feature.link}
//                             description={feature.description}
//                         />
//                     ))}
//                 </div>
//             </div>
//             {/* Text Section */}
//             {/* <div className="container">
//                 <div className="feature__text wow fadeInUp mt-50" data-wow-delay="00ms" data-wow-duration="1500ms">
//                     <span>HURRY</span>
//                     <p>
//                         Choose from our selection of the best places.{' '}
//                         <Link href="/page-service-details">Get a project in mind?</Link>
//                     </p>
//                 </div>
//             </div> */}
//         </section>

//         </>
//     );
// }

// export default Features;



import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// FeatureItem component to handle the repeated structure for each feature item
const FeatureItem = ({ icon, title, link, description }) => (
    <div className="col-sm-6 col-lg-3">
        <div className="feature__item">
            <div className="bg-line">
                <Image src="/assets/images/shape/feature-item-shape.png" alt="shape" width={500} height={500} />
            </div>
            <div className="feature__icon">
                {icon}
            </div>
            <div className="feature__content">
                <h4>
                    <Link className="hover-link" href={link}>
                        {title}
                    </Link>
                </h4>
                <p>{description}</p>
            </div>
            <Link href={link} className="arrow-btn">
                <i className="fa-light fa-arrow-right" />
            </Link>
        </div>
    </div>
);

function Features() {
    const features = [
    {
        icon: (
            <i className="fa-solid fa-wind fa-3x" style={{ color: "#3b82f6" }}></i>
        ),
        title: "Air Pollution Control & Baghouse Services",
        link: "/page-service-details",
        description: "Comprehensive solutions for industrial air filtration systems"
    },
    {
        icon: (
            <i className="fa-solid fa-vials fa-3x" style={{ color: "#0ea5e9" }}></i>
        ),
        title: "Lab Testing Services",
        link: "/page-service-details",
        description: "Advanced testing to detect problems with filter bags"
    },
    {
        icon: (
            <i className="fa-solid fa-shield-check fa-3x" style={{ color: "#10b981" }}></i>
        ),
        title: "Certified by OSHA & MSHA",
        link: "/page-service-details",
        description: "Fully compliant with safety and health regulations"
    },
    {
        icon: (
            <i className="fa-solid fa-screwdriver-wrench fa-3x" style={{ color: "#f59e0b" }}></i>
        ),
        title: "Filter Bag Change-Outs",
        link: "/page-service-details",
        description: "Professional installation and maintenance services"
    }
];


    return (
        <section id="feature-menu" className="feature-area">
            <div className="feature__wrp">
                <div className="row g-0">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            link={feature.link}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;