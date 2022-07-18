import { ApolloProvider } from "@apollo/client";
import Container from "./components/Container";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
