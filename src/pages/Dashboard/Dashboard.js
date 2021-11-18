import React from 'react';
import { Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    NavLink,
    // useParams,
    useRouteMatch
} from "react-router-dom";
// import Explores from '../AllProducts/Explores/Explores';
import AddProducts from '../ManageProducts/AddProducts/AddProducts';
import MyOrder from '../MyOrders/MyOrders';
import ReviewForm from '../ReviewForm/ReviewForm';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div >
            <Row xs={1} md={2} lg={2}>
                <div style={{height: '750px'}} className="col-sm-12 col-md-2 col-lg-2 bg-danger text-start">
                    <h4 className="mt-4 pt-4 text-center">Dashboard</h4>
                    <NavLink style={{color: 'white',textDecoration: 'none', marginLeft:'60px'}} to="/home">Home</NavLink><br />
                    <NavLink style={{color: 'white',textDecoration: 'none', marginLeft:'60px'}} to={`${url}/my-orders`}>MyOrders</NavLink><br />
                    <NavLink style={{color: 'white',textDecoration: 'none',  marginLeft:'60px'}} to={`${url}/reviews`}>Review</NavLink><br />
                    <NavLink style={{color: 'white',textDecoration: 'none',  marginLeft:'60px'}} to={`${url}/make_admin`}>Make Admin</NavLink><br />
                    <NavLink style={{color: 'white',textDecoration: 'none',  marginLeft:'60px'}} to={`${url}/add_products`}>Add Products</NavLink><br />
                    <NavLink style={{color: 'white',textDecoration: 'none',  marginLeft:'60px',}} to={`${url}/add_products`}>Manage All Orders</NavLink>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10">
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                        <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/reviews`}>
                        <ReviewForm></ReviewForm>
                        </Route>
                        <Route path={`${path}/add_products`}>
                        <AddProducts></AddProducts>
                        </Route>
                    </Switch>
                </div>
            </Row>
        </div>
    );
};

export default Dashboard;