import "./index.css";

import React from "react";
import Employee from "./Component/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("developer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "cellva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      id: 2,
      name: "vikey",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      id: 3,
      name: "selva",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      id: 4,
      name: "sakthi",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      id: 5,
      name: "kutty",
      role: "senior dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
    {
      id: 6,
      name: "Mini",
      role: "dev",
      img: "https://getwallpapers.com/wallpaper/full/d/c/c/1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("Update employee inside of app.js");
  }

  return (
    <div className="App text-black">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employees);
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Employees not printed</p>
      )}
    </div>
  );
}

export default App;
