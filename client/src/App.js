import Header from "./components/Header";
import Footer from "./components/Footer";
//import AuthComponent from "./components/AuthComponent";
import FilmContainer from "./components/FilmContainer";

import MainPage from "./components/pages/MainPage"
import Profile from "./components/pages/ProfilePage"

import {React, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Router>
          <Switch>
            <Route exact path='/'>
              <div className="container container_flex">
                <MainPage />
              </div>
            </Route>
            <Route path='/films'>
              <div className="container container_flex">
                <FilmContainer />
              </div>
            </Route>
            <Route path="/:username">
              <Profile />
            </Route>
          </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
