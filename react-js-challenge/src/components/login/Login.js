import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import imgbackground from './background.jpg'
import imglogo from './logoneg.svg'
export default function Cadastro(){

    const [user, setUser] = useState({
        firstname: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    function validate(){
        console.log(localStorage.getItem("user"))
        var person = JSON.parse(localStorage.getItem('user'))
        var correctuser = person.firstname;
        var correctpassword = person.password;

        console.log(typeof user.firstname)
        console.log(typeof correctuser)

        if(correctuser === user.firstname && correctpassword === user.password)
        alert('Login efetuado com sucesso')
        else alert ('Usuario ou senha invalidos')
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
                <div className="Inputs">
                <div className="inputPlace">
                    <label for="firstsname">first name <input type="text" value={user.firstname} name="firstname" onChange={handleChange} placeholder="Your first name"/></label>
                </div>
                <div className="inputPlace">
                    <label for="firstsname">password<input type="text" value={user.password} name="password" onChange={handleChange} placeholder="password"></input></label>
                </div>
          
                <div className="Center">
                    <button onClick={validate}>Register Now</button>
                    
                </div>
                </div>
                <div className='link'>
                <span><Link to="/new-user">Not registration? Sign Up</Link></span>
                </div>
                
        </form>
        </div>
        <div className='background'>
            <img src={imgbackground} className='back'/>
            <img src={imglogo} className='logo'/>
        </div>
        </div>
    )
}