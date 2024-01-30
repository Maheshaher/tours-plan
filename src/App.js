// import logo from './logo.svg';
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";
import React from "react";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
