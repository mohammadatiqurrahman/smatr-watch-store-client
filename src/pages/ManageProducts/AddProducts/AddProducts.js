import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:5000/addProducts',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('successfull')
            reset();
        }
    })
  };
    return (
        <div  className="style-service">
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("brand")} placeholder="Brand" />
                <input {...register("shortTitle")} placeholder="Short Title" />
                <input {...register("longTitle")} placeholder="Long Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="img url" />
                <input style={{width:'10%'}} type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;