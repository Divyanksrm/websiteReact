import React from "react";
import { NavLink } from "react-router-dom";
import Comman from "./common";

const About =()=>{
    return(

            <>
            

            <Comman 
             name='Welcome to About page '
              visit="/Animated" 
              btname="contact now"
              />
                            <img className="content" src="http://source.unsplash.com/2800x450/?technology" alt="_gf"/>

              </>
    )
}
export default About;