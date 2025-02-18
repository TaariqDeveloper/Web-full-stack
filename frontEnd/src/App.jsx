import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cawasho from "./pages/Cawasho";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cawasho" element={<Cawasho />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
