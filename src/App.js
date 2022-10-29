import "./index.css";

import React from "react";
import Employee from "./Component/Employee";
import { useState } from "react";

function App() {
  const hey = true;
  const [role, setRole] = useState("developer");
  //setRole("Web-developer");

  return (
    <div className="App text-black">
      {hey ? (
        <>
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Cellva"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
            <Employee
              name="Vikey"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
            <Employee
              name="Sakthi"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
            <Employee
              name="Cellva"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
            <Employee
              name="Vikey"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
            <Employee
              name="Sakthi"
              role={role}
              img="https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg"
            />
          </div>
        </>
      ) : (
        <p>Hello Sho</p>
      )}
    </div>
  );
}

export default App;
