import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import ShowMyOrder from '../ShowMyOrder/ShowMyOrder';
const MyOrder = () => {
    const {users} = useAuth();
    const [myOrders,setMyOrders] = useState([])
    useEffect(()=>{
        fetch(`https://peaceful-peak-95625.herokuapp.com/my_orders?email=${users?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyOrders(data)
            // console.log('infos are: ',info);
        })
    },[])

    const handleDeleteUser=(id)=>{
        const url = `https://peaceful-peak-95625.herokuapp.com/delete_orders/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Successfully Deleted!')
                const remainingOrders = myOrders.filter(order=>order._id !==id)
                setMyOrders(remainingOrders);
            }
        })
    }

    return (
        <div>
            {
                myOrders?.map(order=> <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Booking Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> <img
                    style={{width: '50px'}}
                        src={order.img}
                        alt=""
                    /> </td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order._id}</td>
                    <td><button onClick={()=>handleDeleteUser(order._id)}>Delete</button></td>
                    </tr>
                </tbody>
                </Table>)
            }
        </div>
    );
};

export default MyOrder;