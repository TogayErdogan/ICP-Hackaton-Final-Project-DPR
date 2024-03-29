import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProductPage from "./pages/product_page/product_page"
import { Home } from "./pages/home/home";
import { Routes, Route } from "react-router-dom";



function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path='/products/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;