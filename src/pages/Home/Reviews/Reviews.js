import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Home/Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://peaceful-peak-95625.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container mt-5 pb-4">
            <h3 className="pb-5 pt-5 text-danger">Customer Reviews</h3>
            <Row xs={1} md={3} lg={3} className="g-4">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;