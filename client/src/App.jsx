import { ApolloProvider } from "@apollo/client";
import Container from "./components/Container";
import Header from "./components/Header";
// import Band from "./components/pages/Band"

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Events } from "./components/Events"
// import { Spotify } from "./components/Spotify"
import "./app.css";

function App() {
  return (
    <div>
          <Header />
          <Container />
    </div>
  );
}

export default App;
