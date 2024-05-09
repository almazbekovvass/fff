import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addComments, postThunk, removeComments} from "../store/postsSlice";

const PostPage = () => {
    const dispatch= useDispatch()
    const id= useParams()
    const {post, error, loading}=useSelector(state => state.posts)
    const[valueInput, setValueInput]= useState('')

    useEffect(() => {
        dispatch(postThunk(id))
        console.log(post)
    }, []);

    if(error){
        return <p>Произошла ошибка: {error}</p>
    }

    const handleSubmit=() =>{
        dispatch(removeComments())
    }
    const addNewComments=() =>{
        dispatch(addComments(valueInput))
    }
    return (
        <>
            {
                loading===false ?
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>{post.comment}</p>
                        <button onClick={handleSubmit}>Delete</button>
                        <input type="text" placeholder='Введите комментарий' onInput={(e) => setValueInput(e.target.value)}/>
                        <button onClick={addNewComments}>Сохранить</button>
                    </div>
                    :
                    <h2>Загрузка...</h2>
            }
        </>
    );
};

export default PostPage;