import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ApiPage1, {apiPageLoader} from "./pages/ApiPage1.jsx";
import FormPage2 from "./pages/FormPage2.jsx";
import CometPost, {cometPostLoader} from "./pages/CometPost.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


const routes= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<ApiPage1/>} loader={apiPageLoader}/>
            <Route path='about' element={<FormPage2/>}/>
            <Route path='/:postId' element={<CometPost/>} loader={cometPostLoader} errorElement={<ErrorPage/>}/>
        </Route>
    )
)

function App() {


  return (
    <RouterProvider router={routes}/>
  )
}

export default App
