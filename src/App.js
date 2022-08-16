import "./App.css";
import React from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
