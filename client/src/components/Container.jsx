import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { Link } from "react-router-dom";
import Band from "./pages/Band";
import AdminUser from "./pages/AdminUser";
import BandUser from "./pages/BandUser";
import Inv from "./pages/Inv";
import Merch from "./pages/Merch";
import User from "./pages/User";

export default function Container() {
  <BrowserRouter>
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Band/:bandId" element={<Band />} />
        <Route path="/User" element={<User />} />
        <Route path="/User/Band" element={<BandUser />} />
        <Route path="/User/Admin" element={<AdminUser />} />
        <Route path="/User/Band/Inventory" element={<Inv />} />
        <Route path="/User/Band/Merchandise" element={<Merch />} />
      </Routes>
    </div>
  </BrowserRouter>;
}
