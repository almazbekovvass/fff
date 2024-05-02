import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import ListGoodsPage from "./pages/ListGoodsPage";
import CardPage from "./pages/CardPage";


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<ListGoodsPage/>}/>
            <Route path='cart' element={<CardPage/>}/>
        </Route>
    )
)
function App() {
  return (
    <>
        <RouterProvider router={router}/>

    </>
  );
}

export default App;
