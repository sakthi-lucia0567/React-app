import "./index.css";

import React from "react";
import Employees from "./pages/Employees";
import Header from "./Component/Header";

function App() {
  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
