import React from "react";
import { NavLink } from "react-router-dom";
// import Web from "../src/image2.jpg";

// // const imag={        Image:"..images/image2.jpg",
// };



const OurCard = (props) => {
    
    return (

        <>
            
                            <div className="col-md-4 col-10 mx-auto ">
                                <div className="card" >
                                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="" className="btn btn-outline-primary text-info">Go somewhere</NavLink>

                                    </div>
                                </div>

                            </div>

                     

        </>
    )
};
export default OurCard;