import {useLoaderData} from "react-router-dom";
import axios from "axios";


const CometPost = () => {
    const postUser= useLoaderData()
    // const {postId} =useParams()

    // const [postUser, setPostUser]= useState([])
    // const getPost = async () =>{
    //     const response = await fetch(link)
    //     const data = await response.json()
    //     setPostUser(data)
    // }
    // useEffect(() => {
    //     getPost()
    // }, []);
    return (
        <div>
            <h1>Post id : {postUser.id}</h1>
            <h2>Title: {postUser.title}</h2>
            <p>{postUser.body}</p>
        </div>
    );
};

export default CometPost;

export const cometPostLoader= async ({params}) =>{
    console.log(params)
    const response =  await axios.get(`https://dummyjson.com/posts/${params.postId}`)
    return response.data
}