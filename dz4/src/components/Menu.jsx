import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/show'>Данные</Link>
            <Link to='/api'>Api данные</Link>
        </div>
    );
};

export default Menu;