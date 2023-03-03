// import logo from './logo.svg';
import './App.css';
// import Header  from './components/header/Header';
// import React, { useState } from "react";
// import Message from './components/Message';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Container from './components/Container';
import Card from './components/Card';
import img1 from "./asserts/GOA.jpg"
import img2 from "./asserts/ladhak.jpeg";
import img3 from "./asserts/MANALI.jpg"
import img4 from "./asserts/SHIMLA.jpg";
import img5 from "./asserts/UDAIPUR.jpg";

function App() {
  return (
    <div className="App">
     <Container/>
    <Router>
       <Routes>
           <Route path = '/' element = {<Home/> } />
       </Routes>
    </Router>
      <Card 
        imgsrc = {img1}
        title = "The netflix"
        sname = "GOA"
        link = "https://goa-tourism.com/"
      />
      <Card 
        imgsrc = {img2}
        title = "ghjjktju"
        sname = "LADHAK"
        link = "https://www.tourmyindia.com/states/ladakh/"
      />
      <Card 
        imgsrc = {img3}
        title = "mkjhux"
        sname = "MANALI"
        link = "https://himachaltourism.gov.in/destination/manali/"
      />
      <Card 
        imgsrc = {img4}
        title = "hbgku"
        sname = "SHIMLA"
        link = "https://himachaltourism.gov.in/destination/shimla/"
      />
      <Card 
        imgsrc = {img5}
        title = "jgyteswaq"
        sname = "UDAIPUR"
        link = "https://www.tourism.rajasthan.gov.in/udaipur.html"
      />
      {/* <Message/> */}
      {/* <Header/> */} 
     

    </div>
  );
}

export default App;
