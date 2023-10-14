import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}
