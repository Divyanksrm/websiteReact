
import React from "react";
import Home from './ANIMATED WEBSITE/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Switch, Route,Redirect} from "react-router-dom";
import Animated from './ANIMATED WEBSITE/Animated';
import Service from './ANIMATED WEBSITE/Service';
import About from './ANIMATED WEBSITE/About';
import Navbar from './ANIMATED WEBSITE/Navbar';
import Footer from "./ANIMATED WEBSITE/Footer";


const App = () => {

  return (


    <>
    <Navbar /> 


      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/About" component={About}/>
        <Route  exact path="/Service" component={Service}/>
        <Route  exact path="/Animated" component={Animated}/>
        <Redirect to="/" />

      </Switch>
      <Footer />
  



    </>
  )
};

export default App;