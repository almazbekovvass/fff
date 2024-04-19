import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const CometPost = () => {
    const {postId} =useParams()
    useEffect(() => {
        console.log(postId)
        console.log(link)
    }, []);

    const link= `https://dummyjson.com/posts/${postId}`
    const [postUser, setPostUser]= useState([])
    const getPost = async () =>{
        const response = await fetch(link)
        const data = await response.json()
        setPostUser(data)
    }
    useEffect(() => {
        getPost()
    }, []);
    return (
        <div>
            <h1>Post id : {postId}</h1>
            <h2>Title: {postUser.title}</h2>
            <p>{postUser.body}</p>
        </div>
    );
};

export default CometPost;