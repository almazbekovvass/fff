import React from 'react';
import Manu from "../components/Manu.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Manu/>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;