import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import React from "react";
import AllCustomers from "../customer-data/AllCustomers";


const AllRoutes = () =>{

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/Login"} element={<Login/>}/>
            <Route path={"/customer-data"} element={<AllCustomers/>}/>
        </Routes>
    );

}

export  default AllRoutes;