import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders,setAllOrders] = useState([]);
    useEffect(()=>{
        fetch('https://peaceful-peak-95625.herokuapp.com/manage_orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[]);
    const handleDeleteUser=(id)=>{
        const url = `https://peaceful-peak-95625.herokuapp.com/delete_orders/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Successfully Deleted!')
                const remainingOrders = allOrders.filter(order=>order._id !==id)
                setAllOrders(remainingOrders);
            }
        })
    }
    return (
        <div>
            
            
                
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Booking Id</th>
                    </tr>
                </thead>
                {
                allOrders?.map(order=><tbody>
                    <tr className="text-start">
                    <td> <img
                    style={{width: '50px'}}
                        src={order.img}
                        alt=""
                    /> </td>
                    <td className="ps-2 text-primary">{order.name}</td>
                    <td className="ps-2 text-primary">{order.email}</td>
                    <td className="ps-2 text-primary">{order.phone}</td>
                    <td className="ps-2 text-primary">{order._id}</td>
                    <td className="ps-2 text-primary"><button onClick={()=>handleDeleteUser(order._id)}>Delete</button></td>
                    </tr>
                </tbody>)
}
                </Table>
            
        </div>
    );
};

export default ManageOrders;