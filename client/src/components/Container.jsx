import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from ".//pages/login";
import Band from ".//pages/Band";
import AdminUser from ".//pages/AdminUser";
import BandUser from ".//pages/BandUser";
import Merch from ".//pages/Merch";
import User from ".//pages/User";
import Cart from ".//pages/Cart";
import ShopItem from ".//pages/ShopItem";
import Shop from ".//pages/Shop";
import Actions from ".//Actions";


export default function Container() {
  return (
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/Band/:bandId" />} /> */}
        {/* <Route path="/Band/:id" element={<BandUser />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/User" element={<User />} />
        <Route path="/Band" element={<Band />} />
        
        <Route path="/Band/Actions" element={<Actions />} />
        <Route path="/Band/Merch" element={<Merch />} />
        <Route path="/Band/:bandName" element={<Band />} />
        <Route path="/Band/:bandName/:bandId" element={<BandUser />} />


        <Route path="/User/Admin" element={<AdminUser />} />
        <Route path="/User/:username" element={<User />} />


        <Route path="/:username" element={<User />} />
        {/* <Route path="/User/Band/Inventory" element={<InvList />} /> */}
        
        {/* <Route path="/Band/:bandId/Shop/Cart" element={<Cart />} />
        <Route path="/Band/:bandId/Shop/:itemId" element={<ShopItem />} />
        <Route path="/Band/:bandId/Shop" element={<Shop />} /> */}
      </Routes>
  );
}
