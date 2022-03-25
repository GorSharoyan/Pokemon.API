import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../../Pages/Home/Home";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
