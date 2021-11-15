import React from 'react';
import { Carousel } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg'
import banner1 from '../../../images/banners/banner1.jpg'
import banner2 from '../../../images/banners/banner2.jpg'
const Heading = () => {
    return (
        <div className="mt-4 container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Run First as the Time Goes</h3>
                        <p>Grab The Opportunities And Make Your Future Brighter!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Time Goes As it Is! No Matter Who Grab This!</h3>
                        <p>Kepp Concern on Time. Time and Tied Wait for None!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Heading;