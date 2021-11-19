import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores,setExplores] = useState([])
    useEffect(()=>{
        fetch('https://peaceful-peak-95625.herokuapp.com/getProducts')
        .then(res=>res.json())
        .then(data=>setExplores(data))
    },[])
    return (
        <div className="container">
        <Row xs={1} md={4} lg={4} className="g-4">
        {
            explores?.map(explore=><Explore
            key = {explores._id}
            explore={explore}
            ></Explore>)  
        }
        </Row>
    </div>
    );
};

export default Explores;