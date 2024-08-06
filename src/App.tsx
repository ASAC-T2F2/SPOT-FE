import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../src/pages/signup";
import NextSignup from "./pages/nextSignup";
import Product from "./pages/product";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="register" element={<Signup />}></Route>
        <Route path="register/signup" element={<NextSignup />}></Route>
        <Route path="/" element={<Product />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
