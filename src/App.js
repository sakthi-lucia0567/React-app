import "./index.css";

import React from "react";
import Employees from "./pages/Employees";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";

function App() {
  console.log("hello world");
  console.log("hello world2");
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Customer" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
