import React from 'react';
import {Link} from "react-router-dom";
import Counter from "./Counter";

const Navbar = () => {
    return (
        <>
            <Link to='/'>Главная  </Link>
            <div style={{display:'flex', gap:'5px'}}>
                <Link to='/cart'>Корзина </Link>
                <Counter/>
            </div>
        </>
    );
};

export default Navbar;