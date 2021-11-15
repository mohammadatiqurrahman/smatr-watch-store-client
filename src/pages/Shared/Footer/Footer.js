import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt,faPhoneAlt,faEnvelope,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    // const element1 = <FontAwesomeIcon icon={faMapMarkerAlt} />
    // const element2 = <FontAwesomeIcon icon={faPhoneAlt} />
    // const element3 = <FontAwesomeIcon icon={faEnvelope} />
    // const element4 = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div className="foter-style">
            <Row xs={1} md={2} lg={3} className="g-4 bg-dark mt-4">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <h4 className="pt-4">Contact Info</h4>
                    
                    <ul className="text-white text-start pb-4 list-style">
                        <li><span className="pe-2"></span> 4566 Brownton Road Jackson, MS 39213</li>
                        <li><span className="pe-2"></span> (800) 123-4567</li>
                        <li><span className="pe-2"></span> info@dentistcareclinic.com</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                <h4 className="pt-4">Our Treatments</h4>
                    <ul className="text-white text-start pb-4 list-style">
                        <li><span className="pe-2"></span> Dental Implants</li>
                        <li><span className="pe-2"></span> Endodontics</li>
                        <li><span className="pe-2"></span> Cosmetic Dentistry</li>
                        <li><span className="pe-2"></span> General Dentistry</li>
                        <li><span className="pe-2"></span> Cosmetic Dentistry</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                <h4 className="pt-4">Info Links</h4>
                    <ul className="text-white text-start pb-4 list-style">
                        <li><span className="pe-2"></span> Home</li>
                        <li><span className="pe-2"></span> About us</li>
                        <li><span className="pe-2"></span> Treatments</li>
                        <li><span className="pe-2"></span> FAQ</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 bg-dark">
                    <h3>Get in Touch</h3>
                </div>
            </Row>
        </div>
    );
};

export default Footer;