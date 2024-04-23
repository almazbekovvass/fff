import {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FormPage2 = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [Case , setCase ] = useState([])

    const postRequest= async () =>{
        const response = await axios.post('https://dummyjson.com/posts/add', {
            title:title,
            body:body,
            userId:4
        })
    }
    const navigate= useNavigate()
    const createPost = (e) =>{
        e.preventDefault()
        postRequest()
        navigate('/')


    }

    return (
        <>
            <form onSubmit={createPost}>
                <input type="text" placeholder='Введите title' onInput={(e) =>setTitle(e.target.value)}/>
                <input type="text" placeholder='Введите body' onInput={(e) =>setBody(e.target.value)}/>
                <button type='submit'>Отправить</button>
            </form>

            <>
                {
                    Case.map((el, index ) =>[
                        <div key={index}>
                            {el}
                        </div>

                    ])
                }
            </>

        </>
    );
};

export default FormPage2;