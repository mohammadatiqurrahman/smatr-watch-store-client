import React from 'react';
import { Col } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

const Product = (props) => {
    const {_id,brand,shortTitle,img,price} = props.product;
    return (
        <div className="mt-4 pt-4">
            <Col>
                <p style={{backgroundColor: '#fc3262fb', color:'#ffebb1', width:'12%', marginLeft:'25%'}}>New</p>
                <img className="style-img w-50"  src={img} alt="" />
                <p>{brand}</p>
                <h5>{shortTitle}</h5>
                <NavLink to={`/place_order/${_id}`} style={{textDecoration: 'none', fontWeight:'normal', fontSize:'14px', backgroundColor:'#1e3964', display:'block', width: '50%', color: 'white', marginLeft:'25%'}}>Purchase Now</NavLink>
                <h5>${price}</h5>
                {/* <Link to={`/place_order/${_id}`}><Button variant="secondary" size="sm">Purchase Now</Button></Link> */}
            </Col>
        </div>
    );
};

export default Product;