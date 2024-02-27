import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Register, UserLogin, AdminLogin,  Home, AdminPanel, AdminRegister} from "./components";
import { Provider } from "react-redux";
import { store } from "./store";
import { setUser } from "./features/authSlice";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    // If token exists, dispatch setUser action to set user data in Redux store
    if (token) {
      try {
        store.dispatch(setUser(token));
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
