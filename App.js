import React from "react";
import Home from "./Components/Home";
import CartItem from "./Components/CartItem";
import LoginForm from "./Components/LoginForm";
import Navbartab from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
    <div className="App">
        <Navbartab />
        <Home/>
        <CartItem />
        <LoginForm/>
        
        <Routes>
                <Route path="/" component={Home} exact />
                <Route path="Components/CartItem" component={<CartItem />} />
                <Route path="Components/LoginForm" component={<LoginForm />} />
        </Routes>        
      
       
    </div>
    </>
  );
}

export default App;
