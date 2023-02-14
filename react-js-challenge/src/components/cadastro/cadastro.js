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

    return (
        <div className="formulario">
            <h1>
                Welcome
            </h1>
            <h3>
                Please, register to continue
            </h3>
            <form action="">
                <div className="inputplace">
                    <label for="firstsname">first name <input type="text" value={user.firstname} onChange={(e) => setUser(e.target.value)} placeholder="Your first name"/></label>
                </div>
                <div>
                    <label for="firstsname">last name<input type="text" value={user.lastname} onChange={(e) => setUser(e.target.value)} placeholder="Your last name"></input></label>
                </div>
                <div>
                    <label for="firstsname">birth date <input type="text" value={user.birthdate} onChange={(e) => setUser(e.target.value)} placeholder="MM/DD/YYYY"></input> </label>
                </div>
                <div>
                    <label for="firstsname">Country <input type="text" value={user.country} onChange={(e) => setUser(e.target.value)} placeholder="Your Country"></input></label>
                </div>
                <div>
                    <label for="firstsname">City <input type="text" value={user.city} onChange={(e) => setUser(e.target.value)} placeholder="Your City"></input></label>
                </div>
                <div>
                    <label for="firstsname">e-mail <input type="text" value={user.email} onChange={(e) => setUser(e.target.value)} placeholder="A valid e-mail here"></input></label>
                </div>
                <div>
                    <label for="firstsname">password <input type="text" value={user.password} onChange={(e) => setUser(e.target.value)} placeholder="Your password"></input></label>
                </div>
                <div>
                    <label for="firstsname">password <input type="text" placeholder="Confirm your password"></input></label>
                </div>
                <div>
                    <button>Register Now</button>
                </div>
            </form>
        </div>
    )
}