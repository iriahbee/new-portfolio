import React from "react";
import GlobalStyle from './GlobalStyles';

//Page Sections
import Footer from "./components/Footer";
import Scrolltotop from "./components/Scrolltotop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {
  return <div>
  
    <Scrolltotop/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>

  </div>;
}

export default App;
