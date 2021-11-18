import React from 'react';
import { Col, Image } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import profile from '../../../../images/profile/profile.png'

const Review = (props) => {
    const { users } = useAuth();
    const { name, description } = props.review;
    const userPhoto = !users?.photoURL? profile : users?.photoURL;
    return (
        <div>
            <Col>
                <div className="d-flex">
                <div>
                    {
                        !users?.email ? <img style={{width: '50px'}} src={profile} alt=""/>:
                        <Image style={{width: '50px'}} roundedCircle src={userPhoto} alt=""/>
                    }
                </div>
                <div className="ms-4 text-start">
                    <h6 className="text-primary">{name}</h6>
                    <p>{description}</p>
                </div>
                </div>
            </Col>
        </div>
    );
};

export default Review;