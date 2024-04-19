import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}> О нас</Link>
        </div>
    );
};

export default Menu;