
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/Home" element={<Home />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;