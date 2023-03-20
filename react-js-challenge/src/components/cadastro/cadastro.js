import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './cadastro.css'
import imgbackground from './background.jpg'
import imglogo from './logoneg.svg'
export default function Cadastro(){

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        birthdate: '',
        country: '',
        city: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const navigate = useNavigate("/login")

    function validate(){

        localStorage.setItem("user",JSON.stringify(user));
        console.log(localStorage.getItem("user"))
    }


    return (
        <div className='main'>
        <div className="formulario">
            <h1>
                Welcome
            </h1>
            <h3>
                Please, register to continue
            </h3>
            <form onSubmit={validate}>
                <div className="inputPlace">
                    <label for="firstsname">first name <input className={user === " " ? "erro" : "certo"} type="text" value={user.firstname} name="firstname" onChange={handleChange} placeholder="Your first name"/></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">last name<input type="text" value={user.lastname} name="lastname" onChange={handleChange} placeholder="Your last name"></input></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">birth date <input type="text" value={user.birthdate} name="birthdate" onChange={handleChange} placeholder="MM/DD/YYYY"></input> </label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">Country <input type="text" value={user.country} name="country" onChange={handleChange} placeholder="Your Country"></input></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">City <input type="text" value={user.city} name="city" onChange={handleChange} placeholder="Your City"></input></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">e-mail <input type="text" value={user.email} name="email" onChange={handleChange} placeholder="A valid e-mail here"></input></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">password <input type="text" value={user.password} name="password" onChange={handleChange} placeholder="Your password"></input></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">password <input type="text" placeholder="Confirm your password"></input></label>
                </div>
                <div className="Center">
                    <button onClick={validate}>Register Now</button>
                </div>
                <span><Link to="/login">Back to login</Link></span>
            </form>
        </div>
        <div className='background'>
            <img src={imgbackground} className='back'/>
            <img src={imglogo} className='logo'/>
        </div>
        </div>
    )
}