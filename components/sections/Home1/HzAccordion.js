import React, { useState } from 'react';
import Link from 'next/link';

const AccordionItem = ({ title, number, content, imageSrc, delay, isActive, onClick }) => (
  <div
    className={`hzAccordion__item ${isActive ? 'active' : ''}`}
    style={{ animationDelay: delay }}
    onClick={onClick}
  >
    <div className="head">
      <h3 className="head-title">
        <span className="title">{title}</span>
        <span className="number" style={{ color: '#fff' }}>{number}</span>
      </h3>
    </div>
    {isActive && (
      <div className="content">
        <div className="wrp">
          <div className="content-wrp">
            <p className="text">{content}</p>
            <Link className="arry-btn" href="/page-service-details">
              <i className="fa-thin fa-arrow-up-right" />
            </Link>
          </div>
          <div className="shape">
            <img src="assets/images/shape/hz-accordion-shape.png" alt="shape" />
          </div>
          <div className="image">
            <img src={imageSrc} alt="image" />
          </div>
        </div>
      </div>
    )}
  </div>
);

const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: 'Air Pollution Control & Baghouse Services',
      number: '01',
      content: 'Upgrade outdated baghouse systems to more efficient configurations tailored to current process demands, regulations, or air quality goals.',
      imageSrc: 'assets/images/service/baghouse2.jpg',
      delay: '0ms',
    },
    {
      title: 'Engineering Evaluations',
      number: '02',
      content: 'Comprehensive technical assessments to evaluate the performance, design, and compliance of your dust collection or filtration system.',
      imageSrc: 'assets/images/service/Eng7.png',
      delay: '200ms',
    },
    {
      title: 'Master Service Contracts',
      number: '03',
      content: 'Long-term, bundled service agreements tailored for clients with multiple sites or recurring needs, offering priority response and discounted rates.',
      imageSrc: 'assets/images/service/Master2.jpg',
      delay: '400ms',
    },
    {
      title: 'Preventive Maintenance Plans',
      number: '04',
      content: 'Planned service routines designed to extend equipment life, ensure compliance, and minimize costly unplanned downtime.',
      imageSrc: 'assets/images/service/Maintanance.jpg',
      delay: '600ms',
    },
    // {
    //   title: 'Preventive Maintenance Plans',
    //   number: '05',
    //   content: 'Planned service routines designed to extend equipment life, ensure compliance, and minimize costly unplanned downtime.',
    //   imageSrc: 'assets/images/service/service-one-image4.jpg',
    //   delay: '600ms',
    // },
    // {
    //   title: 'Preventive Maintenance Plans',
    //   number: '06',
    //   content: 'Planned service routines designed to extend equipment life, ensure compliance, and minimize costly unplanned downtime.',
    //   imageSrc: 'assets/images/service/service-one-image4.jpg',
    //   delay: '600ms',
    // },
    // {
    //   title: 'Preventive Maintenance Plans',
    //   number: '07',
    //   content: 'Planned service routines designed to extend equipment life, ensure compliance, and minimize costly unplanned downtime.',
    //   imageSrc: 'assets/images/service/service-one-image4.jpg',
    //   delay: '600ms',
    // },
    // {
    //   title: 'Preventive Maintenance Plans',
    //   number: '08',
    //   content: 'Planned service routines designed to extend equipment life, ensure compliance, and minimize costly unplanned downtime.',
    //   imageSrc: 'assets/images/service/service-one-image4.jpg',
    //   delay: '600ms',
    // },
  ];

  return (
    <>
    
    <section id="service-menu" className="hzAccordion-area pt-130 pb-130">
      <div className="container">
        <div className="section-header mb-60">
          <h2 className="wow splt-txt text-white" data-splitting>
            Our Services
          </h2>
        </div>
        <div className="hzAccordion__wrp">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              number={item.number}
              content={item.content}
              imageSrc={item.imageSrc}
              delay={item.delay}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? 0 : index)}
            />
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default HorizontalAccordion;
