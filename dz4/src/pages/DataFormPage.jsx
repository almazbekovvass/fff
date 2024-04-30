import {useSelector} from "react-redux";


const DataFormPage = () => {


    const {name, age, gender} = useSelector(state => state.user)
    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
        </div>
    );
};

export default DataFormPage;