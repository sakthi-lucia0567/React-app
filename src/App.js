import "./index.css";

import React from "react";
import Employees from "./pages/Employees";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          {/* hello */}
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Customer" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
