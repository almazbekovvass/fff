import React, {useEffect, useState} from 'react';

const ApiPage = () => {
    const [post, setPost]= useState([])
    const postRequest = async () =>{
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        setPost(data.posts)
    }
    useEffect(() => {
        postRequest()
    }, []);

    return (
        <div>
            {
                post.map((el, index) =>[
                    <div key={index}>
                        <h2>Title: {el.title}</h2>
                        <p>{el.body}</p>
                    </div>
                ])
            }

        </div>
    );
};

export default ApiPage;