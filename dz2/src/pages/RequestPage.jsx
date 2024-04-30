import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const ApiPage1 = () => {
    const [postUser, setPostUser]= useState([])
    const link='https://dummyjson.com/posts'
    const getPost = async () =>{
        const response = await fetch(link)
        const data = await response.json()
        setPostUser(data.posts)
    }
    useEffect(() => {
        getPost()
    }, []);

    return (
        <div>
            {
                postUser.map((el, index) =>[
                    <div key={index}>
                        <Link to={`/${el.id}`}>
                            <h2>Title: {el.title}</h2>
                            <p>{el.body}</p>
                        </Link>

                    </div>
                ])
            }

        </div>
    );
};

export default ApiPage1;