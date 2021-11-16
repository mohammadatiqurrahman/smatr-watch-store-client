import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <div className="container">
        <Row xs={1} md={3} lg={3} className="g-4">
        {
            products?.map(product=><Product
            key = {product._id}
            product={product}
            ></Product>)  
        }
        </Row>
        <NavLink to="explore"><Button style={{marginTop: '10px', backgroundColor: '#a6a4a2'}} size="sm">Explore More Products</Button></NavLink>
    </div>
    );
};

export default Products;