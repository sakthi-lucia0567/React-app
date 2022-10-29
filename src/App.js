import "./index.css";

import React from "react";
import Employee from "./Component/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const hey = true;
  const [role, setRole] = useState("developer");
  const [employees, setEmployees] = useState([
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
  ]);

  return (
    <div className="App text-black">
      {hey ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employees);
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Hello Sho</p>
      )}
    </div>
  );
}

export default App;
