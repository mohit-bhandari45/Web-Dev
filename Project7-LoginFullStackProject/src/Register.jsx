import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import "./css/Register.css"

const Register = () => {
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onsubmit = async (data) => {
        let a = await fetch("http://localhost:3000/register", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        })
        // let b=await a.text();
        // console.log(b)
        navigate("/login")
    }

    return (
        <div className='register'>
            <form className='form1' onSubmit={handleSubmit(onsubmit)} action="">
                <input className='inputs1' placeholder='Username' type="username" {...register("username", { required: { value: true, message: "This field is required" } })} />
                {errors.username && <div>{errors.username.message}</div>}
                <input className='inputs1' placeholder='Password' type="password" {...register("password", { required: { value: true, message: "This field is required" } })} />
                {errors.password && <div>{errors.password.message}</div>}
                <input className='submit1' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Register
