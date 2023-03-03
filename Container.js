import React from "react";
// import ReactDOM from "react-dom";
import img1 from "../asserts/GOA.jpg"
import img2 from "../asserts/ladhak.jpeg";
import img3 from "../asserts/MANALI.jpg"
import img4 from "../asserts/SHIMLA.jpg";
import img5 from "../asserts/UDAIPUR.jpg";
import './Container.css';



function Container(){

    const links = "https://picsum.photos/";

        return(
            <>
            <h1 className="heading" > HOLIFLY</h1>
                <div className="img_div">
                <a href={links} target = "_blank" rel="noreferrer">
                    <img src = {img1}  alt = "GOA" /> 
                </a>      
                    <img src = {img2}  alt = "LADHAK" />   
                    <img src = {img3}  alt = "MANALI" />   
                    <img src = {img4}  alt = "SHIMLA" />   
                    <img src = {img5}  alt = "UDAIPUR" /> 
                </div>
            </>
            );
}

export default Container;
