import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const {users} = useAuth();
    const { orderId } = useParams();
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/single_products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/my_orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfull completed order')
                    reset();
                }
            })
    };

    return (
        <div>
            <h3 className="mt-4 mb-4 text-danger">Please Add Detail Information to Place Order</h3>
            <div className="d-flex container">
                <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                    <img style={{width:'25%'}} src={product?.img} alt="" />
                    <h5>{product?.longTitle}</h5>
                    <p>{product?.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 style-order">
                    <h3>Provide Order Info</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 40 })} defaultValue={users?.displayName} placeholder="name" />
                        <input {...register("email", { required: true})} defaultValue={users?.email}  placeholder="email" />
                        <input type="number" {...register("phone")} placeholder="phone" />
                        <input {...register("address")} placeholder="address" />
                        <input {...register("img", { required: true})} defaultValue={product?.img}  placeholder="email" />
                        <input style={{ width: '10%' }} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;