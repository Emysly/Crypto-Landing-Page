import React from "react";
import "./App.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./header.component";
import { Carousel } from "./Carousel.component";

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
