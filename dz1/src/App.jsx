import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Manu from "./components/Manu.jsx";
import ApiPage1 from "./pages/ApiPage1.jsx";
import FormPage2 from "./pages/FormPage2.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<ApiPage1/>}/>
            <Route path='about' element={<FormPage2/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
