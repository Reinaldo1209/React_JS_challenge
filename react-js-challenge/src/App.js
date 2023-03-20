import React from "react";
import Cadastro from "./components/cadastro/Cadastro";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";



function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/new-user" element={<Cadastro/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
    <Route path="/" element={<Navigate to="/new-user"/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
