import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import { DataProvider } from "./data/DataContext";

/**
 * The App function returns a BrowserRouter component that contains a DataProvider component that
 * contains a Routes component that contains a Route component that contains a Home component
 */

function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </DataProvider>
  </BrowserRouter>
  );
}

export default App;
