import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from ".//pages/login";
import Band from "./pages/Band";
import AdminUser from "./pages/AdminUser";
import BandUser from "./pages/BandUser";
import Inv from "./pages/Inv";
import Merch from "./pages/Merch";
import User from "./pages/User";
import Cart from "./pages/Cart";
import ShopItem from "./pages/ShopItem";
import Shop from "./pages/Shop";
import Actions from "./Actions"


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function Container() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/Band/:bandId" />} /> */}

        <Route path="/Band/:bandName" element={<Band />} />
        <Route path="/" element={<Login />} />
        <Route path="/Band/:bandId" element={<Band />} />
        <Route path="/Merch" element={<Merch />} />
        //{" "}
        <Route path="/User" element={<User />} />
        <Route path="/User/Band" element={<BandUser />} />
        <Route path="/User/Admin" element={<AdminUser />} />
        <Route path="/Band/Actions" element={<Actions />} />
        <Route path="/User/Band/Inventory" element={<Inv />} />
        <Route path="/User/Band/Merchandise" element={<Merch />} />
        <Route path="/Band/:bandId/Shop/Cart" element={<Cart />} />
        <Route path="/Band/:bandId/Shop/:itemId" element={<ShopItem />} />
        <Route path="/Band/:bandId/Shop" element={<Shop />} />

      </Routes>
    </ApolloProvider>
  );
}
