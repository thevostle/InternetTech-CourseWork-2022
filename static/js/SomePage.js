import SomeComponent from "./components/SomeComponent";
import Header from "./components/Header";
import React from "react";
import ReactDOM from "react-dom";

const SomePage = () => {
    return <Header />;
};

ReactDOM.render(<SomePage />, document.getElementById("root"));