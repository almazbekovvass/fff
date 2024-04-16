import React, {useEffect, useState} from 'react';

const ApiPage1 = () => {
    const [postUser, setPostUser]= useState([])
    const link='https://dummyjson.com/posts'
    const createPost = async () =>{
        const response = await fetch(link)
        const data = await response.json()
        setPostUser(data.posts)
    }
    useEffect(() => {
        createPost()
    }, []);

    return (
        <div>
            {
                postUser.map((el, index) =>[
                    <div key={index}>
                        <h2>Title: {el.title}</h2>
                        <p>{el.body}</p>
                    </div>
                ])
            }

        </div>
    );
};

export default ApiPage1;