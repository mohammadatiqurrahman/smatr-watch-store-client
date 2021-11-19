// import axios from 'axios';
import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import './AddProducts.css'

const ReviewForm = () => {
    const {users} = useAuth();
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
    axios.post('https://peaceful-peak-95625.herokuapp.com/reviews',data)
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
                <input  {...register("name")} defaultValue={users?.displayName} />
                <textarea {...register("description")} placeholder="Description" />
                <input type="float" {...register("rating")} placeholder="Rate Our Product" />
                <input style={{width:'10%'}} type="submit" value="Review" />
            </form>
        </div>
    );
};

export default ReviewForm;