import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./components/cadastro/Cadastro"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"

export default function Routes(){
   return (
      <Routes>
         <Route path="/" component={Cadastro} />
         <Route path="/Login" component={Login} />
         <Route path="/Dashboard" component={Dashboard} />
       </Routes>
   )
}