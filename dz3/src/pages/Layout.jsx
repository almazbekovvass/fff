
import Menu from "../components/Menu.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;