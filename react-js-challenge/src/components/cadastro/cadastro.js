import React, { useState } from 'react';

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


    function validate(){
        localStorage.setItem("user",JSON.stringify(user));
        console.log(localStorage.getItem("user"))
    }

    return (
        <div className="formulario">
            <h1>
                Welcome
            </h1>
            <h3>
                Please, register to continue
            </h3>
            {/* <form onSubmit={validate}> */}
                <div className="inputplace">
                    <label for="firstsname">first name <input type="text" value={user.firstname} name="firstname" onChange={handleChange} placeholder="Your first name"/></label>
                </div>
                <div>
                    <label for="firstsname">last name<input type="text" value={user.lastname} name="lastname" onChange={handleChange} placeholder="Your last name"></input></label>
                </div>
                <div>
                    <label for="firstsname">birth date <input type="text" value={user.birthdate} name="birthdate" onChange={handleChange} placeholder="MM/DD/YYYY"></input> </label>
                </div>
                <div>
                    <label for="firstsname">Country <input type="text" value={user.country} name="country" onChange={handleChange} placeholder="Your Country"></input></label>
                </div>
                <div>
                    <label for="firstsname">City <input type="text" value={user.city} name="city" onChange={handleChange} placeholder="Your City"></input></label>
                </div>
                <div>
                    <label for="firstsname">e-mail <input type="text" value={user.email} name="email" onChange={handleChange} placeholder="A valid e-mail here"></input></label>
                </div>
                <div>
                    <label for="firstsname">password <input type="text" value={user.password} name="password" onChange={handleChange} placeholder="Your password"></input></label>
                </div>
                <div>
                    <label for="firstsname">password <input type="text" placeholder="Confirm your password"></input></label>
                </div>
                <div>
                    <button onClick={validate}>RE</button>
                </div>
            {/* </form> */}
        </div>
    )
}