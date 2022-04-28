import React from "react";
import OurCard from "./ourCard";
import DataCard from "./DataCard";
// import Web from "../src/image2.jpg";

// // const imag={        Image:"..images/image2.jpg",
// };



const Service = () => {
    return (

        <>
            <div className="my-5">
                <h1 className="text-center display-2">  Our service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                        {
                            DataCard.map((val,ind)=>{
                                return(
                                    <OurCard 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={ind}
                                    />
                                );
                            })

                            
                        }
                            </div>

                        </div>
                    </div>
                </div>


        </>
    )
};
export default Service;