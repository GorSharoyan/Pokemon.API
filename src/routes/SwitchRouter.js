import React from "react";
import { Routes, Route } from "react-router-dom";

//pages

export default function SwitchRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
