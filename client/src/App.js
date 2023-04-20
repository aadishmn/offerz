import React from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";
import Signup from "./components/Singup";
import Login from "./components/Login";
import DomainCourse from "./components/stores";

function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          <Route path="/services" element={<About />} />
          {admin && user && <Route path="/products" element={<Products />} />}
          <Route path="/login" element={<Login />} />
          {user && <Route path="/contactform" element={<ContactForm />} />}
          <Route path={"/stores/:domain"}element={<DomainCourse/>}></Route>
          <Route path="/sign-up" element={<Signup />} />
          {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
