import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Register,
  UserLogin,
  AdminLogin,
  Home,
  AdminPanel,
  AdminRegister,
  ListingSpace,
  Search
} from "./components"
import Layout from "./layout";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="admin/register" element={<AdminRegister />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="adminPanel" element={<AdminPanel />} />

          {/* Listing Space */}
          <Route path="listingSpace" element={<ListingSpace />} />

          <Route path="allSpace" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
