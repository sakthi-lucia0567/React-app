import React from "react";
import Employee from "./Component/Employee";
import { useState } from "react";

function App() {
  const hey = true;
  const [role, setRole] = useState("dev");

  return (
    <div className="App">
      {console.log("Log")}
      {hey ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Cellva" role="Stupid" />
          <Employee name="Vikey" role={role} />
          <Employee name="Sakti" />
        </>
      ) : (
        <p>Hello Sho</p>
      )}
    </div>
  );
}

export default App;
