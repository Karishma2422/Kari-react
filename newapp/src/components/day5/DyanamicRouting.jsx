import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DyanamicRouting = () => {
    const {productid} = useParams();
    useEffect(()=> {
        if(productid){

        }
    }, [productid]); 
    return(
        <div>
            <h1>Dyanamic Routing : {productid} </h1>
            </div>
    )
}

export default DyanamicRouting;