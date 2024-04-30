import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ShowUserApi = () => {

    const users= useSelector(state => state.apiUser.users)



    return (
        <div>

            {
                users.map((el, index) => [
                    <Link to={`/edit/${el.id}`} key={index}>
                        <div> Name: {el.first_name}, Email: {el.email}</div>
                    </Link>
                ])
            }

        </div>
    );
};

export default ShowUserApi;