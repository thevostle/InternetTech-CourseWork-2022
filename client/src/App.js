import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmCard from "./components/cards/FilmCard";
import AuthComponent from "./components/AuthComponent";

import {React, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import './App.scss';

function App() {
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/films')
      .then(response => response.json())
      .then(data => {
        console.log(data.success)
      })
  }, [])

  return (
    <div className="App">
        <Header />
        <div className="container container_flex">
            <AuthComponent />
        </div>
        <Footer />
    </div>
  );
}

export default App;
