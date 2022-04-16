import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmCard from "./components/cards/FilmCard";
import AuthComponent from "./components/AuthComponent";

import React from "react";
import ReactDOM from "react-dom";

import './App.scss';

function App() {
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
