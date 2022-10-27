import React from "react";
import Naruto from "./Component/Naruto";

function App() {
  const hey = false;

  return (
    <div className="App">
      {console.log("Log")}
      {hey ? (
        <>
          <Naruto />
          <Naruto />
          <Naruto />
          <Naruto />
        </>
      ) : (
        <p>Hello Sho</p>
      )}
    </div>
  );
}

export default App;
