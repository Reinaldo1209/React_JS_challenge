import React, { useState } from 'react';
import "./dashboard.css"
import { Link, useNavigate } from "react-router-dom";
import imglogo from "./logo.svg"
import imgback from "./background2.svg"


const Dashboard = () =>{
return(
    <div className="mains">
        <div className="header">
            <div className='title'>
                <h1 className='h1'>Week Planner</h1>
                <h5 className='h5'>Use this planner to organize your daily issues.</h5>
            </div>
            <div>
                <h3 className='h3'>Hora</h3>
            </div>
            <div className='logo'>
                <Link to="https://www.uol.com.br/"><img src={imglogo}/></Link>
            <h4 id="hora">Logout</h4>
            </div>
        </div>
        <div className="action">
           <input type="text" placeholder='Task or issue' className='input'/>
           <select name="day" className='select'>
           <option value="0">Monday</option>
                <option value="1">Tuesday</option>
                <option value="2">Wednesday</option>
                <option value="3">Thursday</option>
                <option value="4">Friday</option>
                <option value="5">Saturday</option>
                <option value="6">Sunday</option>
           </select>
           <input className='input' type="time"/>
           <div class="btn">
                    <button className="btn1">+ Add to calender</button>
                    <button className="btn2">- Delete all</button>
            </div>
            <div className='tasks'>
                <div className='selectday'>
                    <table>
                    <th>
                        <td><button className="day1">Monday</button></td>
                        <td><button className="day2">Tuesday</button></td>
                        <td><button className="day3">Wednesday</button></td>
                        <td><button className="day4">Thursday</button></td>
                        <td><button className="day5">Friday</button></td>
                        <td><button className="day6">Saturday</button></td>
                        <td><button className="day7">Sunday</button></td>
                    </th>
                    </table>
                </div>
            </div>
            <div>
                <img className='img' src={imgback}/>
            </div>
        </div>
    </div>
)
}

export default Dashboard

