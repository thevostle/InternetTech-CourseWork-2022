import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthComponent from "./components/AuthComponent";

import React from "react";
import ReactDOM from "react-dom";

import '../style.scss';

const MainPage = () => {
    return (   
    <div className="app">
        <Header />
        <div className="container container_flex">
            <AuthComponent />
        </div>
        <Footer />
    </div>);
};

ReactDOM.render(<MainPage />, document.getElementById("root"));
