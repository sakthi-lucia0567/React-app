import React from "react";
import Naruto from "./Component/Naruto";

function App() {
  const hey = true;

  return (
    <div className="App">
      {console.log("Log")}
      {hey ? (
        <>
          <Naruto name="Naruto" role="Hokage" />
          <Naruto name="boru" />
          <Naruto name="Sho" />
        </>
      ) : (
        <p>Hello Sho</p>
      )}
    </div>
  );
}

export default App;
