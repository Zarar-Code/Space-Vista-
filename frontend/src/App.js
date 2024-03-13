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
  AdminHome,
  MySpace,
  MySpaceEdit,
  AllSpaces,
  ViewSpace
} from "./components";
import Layout from "./layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Users Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<UserLogin />} />

          {/* Admin Routes */}
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />

          <Route path="admin/allUsers" element={<AllUsers />} />
          <Route path="admin/allSpaces" element={<AllSpaces />} />
          <Route path="admin/allSpaces/:spaceId" element={<ViewSpace />} />
          
        <Route path="/" element={<Layout />}>
          <Route exact path="" element={<Home />} />

          {/* Listing Space */}
          <Route path="listingSpace" element={<ListingSpace />} />

          <Route path="mySpace" element={<MySpace />} />
          <Route path="mySpace/:spaceId" element={<MySpaceEdit />} />
          <Route path="allSpace" element={<Search />} />
          <Route path="allSpace/:spaceId" element={<EachSpace />} />

          {/* Other Routes */}
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
