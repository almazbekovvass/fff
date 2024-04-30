import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeAge, changeGender, changeName} from "../store/userSlice.js";
import {useNavigate} from "react-router-dom";


const FormPage = () => {

    const [userName, setUserName] =useState('')
    const[userAge, setUserAge] = useState('')
    const[userGender, setUserGender] = useState('')
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const sendSubmit = (e) =>{
        e.preventDefault()
        dispatch(changeName(userName))
        dispatch(changeAge(userAge))
        dispatch(changeGender(userGender))
        navigate("/show")
        setUserName('')
        setUserAge('')
        setUserGender('')


    }


    return (
        <div>
            <form onSubmit={sendSubmit}>
                <input type="text" placeholder='Введите имя' onInput={(e) => setUserName(e.target.value)}/>
                <input type="number" placeholder='Введите ваш возраст' onInput={(e) => setUserAge(e.target.value)}/>
                <input type="text" placeholder='Введите ваш пол' onInput={(e) => setUserGender(e.target.value)}/>
                <button>Отправить</button>
            </form>
        </div>
    );
};

export default FormPage;