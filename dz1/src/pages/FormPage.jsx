import React, {useState} from 'react';

const FormPage2 = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [Case , setCase ] = useState([])


    const createPost = (e) =>{
        e.preventDefault()
        setCase([...Case, title, body])
    }

    return (
        <>
            <form onSubmit={createPost}>
                <input type="text" placeholder='Введите title' name='title' onInput={(e) =>setTitle(e.target.value)}/>
                <input type="text" placeholder='Введите body' name='body' onInput={(e) =>setBody(e.target.value)}/>
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