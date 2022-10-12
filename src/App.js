import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={ <Products/>}></Route>
         <Route path="/product/:product_id" element={ <ProductDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
