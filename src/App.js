import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.componenet";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Cart from "./components/routes/cart/cart.component";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<SignIn />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
