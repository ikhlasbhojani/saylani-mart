import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "../components/StartPage";
import Signup from "../components/Signup";
import Login from "../components/Login";
import AddItem from "../components/AddItem";
import AddCategory from "../components/AddCategory"

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/" element={<AddCategory />} />
      </Routes>
    </>
  );
};

export default RoutePage;
