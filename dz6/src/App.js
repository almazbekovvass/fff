import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import GoodsPage from "./pages/GoodsPage";
import CartPage from "./pages/CartPage";


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<GoodsPage/>}/>
            <Route path='cart' element={<CartPage/>}/>
        </Route>
    )
)
function App() {
  return (
      <div>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
