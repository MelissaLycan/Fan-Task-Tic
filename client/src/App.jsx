import React from "react";
import { Route, Routes } from "react-router-dom";
// import Container from "./components/Container";
import Header from "./components/Header";
import Band from "./components/pages/Band"
import User from "./components/pages/User"
import Merch from "./components/pages/Merch"
// import Band from "./components/pages/Band"

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Events } from "./components/Events"
// import { Spotify } from "./components/Spotify"
import "./app.css";

function App() {
  return (
    <div>
          <Header />
          
          <Merch />
          <Routes>
            <Route exact path="/" element={<Band />} />
            <Route exact path="/User/:_id" element={<User />} />
          </Routes>

    </div>
  );
}

export default App;
