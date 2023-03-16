import React from "react";
import "./App.css";
import Navbar from "./components/NAVBAR/Navbar";
import Body from "./components/BODY/Body";
import Footer from "./components/FOOTER/Footer";

function App(props) {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
