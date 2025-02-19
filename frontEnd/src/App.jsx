import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cawasho from "./pages/Cawasho";
import Dashboard from "./pages/Dashboard";
import Update from "./pages/Update";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cawasho" element={<Cawasho />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
