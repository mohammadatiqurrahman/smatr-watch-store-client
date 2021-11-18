import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Register.css'
const Register = () => {
    const {registerNewUser,signInWithGoogle,isLoading} = useAuth();
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data =>{
        if(data.password !== data.password2){
            alert('Password Not Matched! Please Try Again :(')
        }
        registerNewUser(data.email,data.password,data.name);
        // updateName(data?.name);
        // console.log(data);
        reset();
      };
    return (
        <div>
            <div className="d-flex">
                <div className="col-sm-12 col-md-6 col-lg-6 style-order">
                <h3 className="mt-4 mb-4">Please Register</h3>
                    { !isLoading &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 40 })} placeholder="Enter Your Name" />
                        <input {...register("email")} type="email" placeholder="Enter Email" />
                        <input {...register("password")} type="password" placeholder="Enter Your Password" />
                        <input {...register("password2")} type="password" placeholder="Re-Enter Your Password" />
                        <input style={{ width: '60%' }} type="submit" />
                    </form>
                    }
                    {isLoading &&  <Spinner animation="grow" variant="secondary" />

                    }
                   
                    <Link to="/login"><p>Already Have an Account? Login</p></Link>
                    <p>or</p>
                    <Button onClick={signInWithGoogle} size="sm">Signin With Google</Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Register;