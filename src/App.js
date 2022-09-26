import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import { DataProvider } from "./data/DataContext";

function App() {
  return (
    <BrowserRouter>
    {" "}
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>{" "}
    </DataProvider>
  </BrowserRouter>
  );
}

export default App;
