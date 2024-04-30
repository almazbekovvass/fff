import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import FormPage from "./pages/FormPage.jsx";
import DataFormPage from "./pages/DataFormPage.jsx";
import ShowUserApi from "./pages/ShowUserApi.jsx";
import EditUserApi from "./pages/EditUserApi.jsx";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<FormPage/>}/>
            <Route path='show' element={<DataFormPage/>}/>
            <Route path='api' element={<ShowUserApi/>}/>
            <Route path='edit/:id' element={<EditUserApi/>}/>
        </Route>
    )
)
function App() {


  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
