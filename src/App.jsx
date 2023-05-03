import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
// import Service from "./components/services/Service";
import Testimonal from "./components/testimonals/Testimonal";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Project></Project>
      {/* <Service></Service> */}
      <Testimonal></Testimonal>
      <Contact></Contact>
      <Footer></Footer>

    </>
  );
};

export default App;
