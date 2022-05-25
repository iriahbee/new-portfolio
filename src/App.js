import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page Sections
import Footer from "./components/Footer";
import Scrolltotop from "./components/Scrolltotop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects";
import Navbar from "../src/components/navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scrolltotop />
      <Navbar/>
      <Routes>
        <Route end path="/" element={<Home/>} />
        <Route end path="about"element={<About/>} />
        <Route end path="projects" element={<Projects/>}/>
        <Route end path="contact" element={<Contact/>}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
