
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            Error Page: {error.message}
        </div>
    );
};

export default ErrorPage;