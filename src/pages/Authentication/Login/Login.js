import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
// import './Register.css'
const Login = () => {
    const {signInUsingEmailPassword,signInWithGoogle} = useAuth();
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data =>{
        signInUsingEmailPassword(data.email,data.password);
        console.log(data);
        reset();
      };
    return (
        <div>
            <div className="d-flex">
                <div className="col-sm-12 col-md-6 col-lg-6 style-order">
                <h3 className="mt-4 mb-4">Please Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <input {...register("name", { required: true, maxLength: 40 })} placeholder="name" /> */}
                        <input {...register("email")} type="email" placeholder="Email" />
                        <input {...register("password")} placeholder="Enter Your Password" />
                        <input style={{ width: '10%' }} type="submit" />
                    </form>
                    <Link to="/register"><p>New User? Create Account</p></Link>
                    <p>or</p>
                    <Button onClick={signInWithGoogle} size="sm">Signin With Google</Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Login;