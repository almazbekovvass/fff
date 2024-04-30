import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeApi} from "../store/apiUserSlice.js";
import {useState} from "react";


const EditUserApi = () => {
    const {id} = useParams()

    const [userName, setUserName] =useState('')
    const[userAge, setUserAge] = useState('')
    const[userGender, setUserGender] = useState('')
    const[userEmail, setUserEmail] = useState('')

    const [user,setUser] = useState({
        id:'',
        first_name:'',
        email:'',
        gender:'',
        birth_date:''
    })






    const dispatch = useDispatch()

    const saveData = () =>{
        setUser({
            id:id,
            first_name:userName,
            email: userEmail,
            gender:userGender,
            birth_date:userAge
        })
        dispatch(changeApi(user))
        console.log(user)
    }

    return (
        <div>
            <input type="text" placeholder='Введите имя' onInput={(e) => setUserName(e.target.value)}/>
            <input type="text" placeholder='Введите возраст' onInput={(e) => setUserAge(e.target.value)}/>
            <input type="text" placeholder='Введите email' onInput={(e) => setUserEmail(e.target.value)}/>
            <input type="text" placeholder='Введите пол' onInput={(e) => setUserGender(e.target.value)}/>
            <button onClick={saveData}>Сохранить</button>
        </div>
    );
};

export default EditUserApi;