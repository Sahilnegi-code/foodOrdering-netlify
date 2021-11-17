import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Navigation from "./Component/Navigation";
import ProductPage from "./Pages/ProductPage";
import Cart  from "./Pages/Cart";
import {CartContext }from './CartContext';
import SingleProduct from "./Pages/SingleProduct";
import { useEffect, useState } from "react";

function App() {

  const[cart,setCart] = useState({});
  // fetch from local storage
 
  useEffect(()=>{
    
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);

  return (
    <>
    <Router>
    
    <CartContext.Provider value={{cart,setCart}}>
    <Navigation/>
    <Switch>
    <Route path ="/" component={Home} exact ></Route>
    <Route path ="/about" exact component={About} ></Route>
    <Route path ="/product" exact component={ProductPage} ></Route>
    <Route path="/cart" exact component = {Cart} ></Route>
    <Route path="/products/:_id" component={SingleProduct} exact></Route>
    
    </Switch>
    </CartContext.Provider>
    </Router>
    
    </>
  )
}

export default App
