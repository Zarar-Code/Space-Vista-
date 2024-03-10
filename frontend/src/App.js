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
  Search,
  EachSpace,
  AllUsers,
  Contact,
  AdminHome
} from "./components";
import Layout from "./layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/login" element={<UserLogin />} />
          
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/AdminHome" element={<AdminHome />} />

          <Route path="admin/allUsers" element={<AllUsers />} />
          
        <Route path="/" element={<Layout />}>
          <Route exact path="" element={<Home />} />

          {/* Listing Space */}
          <Route path="listingSpace" element={<ListingSpace />} />

          <Route path="contact" element={<Contact />} />

          <Route path="allSpace" element={<Search />} />
          <Route path="allSpace/:spaceId" element={<EachSpace />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
