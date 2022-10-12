import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         
         <Route path="/" element={ <Products/>}></Route>
         <Route path='/:category_id'  element={<Products/>}></Route>
         <Route path="/product/:product_id" element={ <ProductDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
