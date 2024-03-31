import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import "./css/Login.css"
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const [error, seterror] = useState("")
    const [bool, setbool] = useState(false)
    const [form, setform] = useState({user:"",pass:""})

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onsubmit = async (data) => {
        console.log(data)
        let a = await fetch("http://localhost:3000/login", {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        })
        let b = await a.text();
        if (b === "Success") {
            navigate("/")
        }
        else {
            setbool(true)
            seterror(b)
            setform({user:"",pass:""})
        }
    }

    const handleChange=(e) => {
      setform({...form,[e.target.name]:e.target.value})
    }
    

    return (
        <>
            <div className='login'>
                <form className='form2' onSubmit={handleSubmit(onsubmit)} action="">
                    <input onChange={handleChange} value={form.user} placeholder='username' className='inputs2' type="username" {...register("username", { required: { value: true, message: "This field is required" } })} />
                    {errors.username && <div>{errors.username.message}</div>}
                    <input onChange={handleChange} value={form.pass} placeholder='password' className='inputs2' type="password" {...register("password", { required: { value: true, message: "This field is required" } })} />
                    {errors.password && <div>{errors.password.message}</div>}
                    <input className='submit2' type="submit" value="Submit" />
                </form>
                {bool && <div className='error'>{error} Try Again</div>}
            </div>
        </>
    )
}

export default Login

