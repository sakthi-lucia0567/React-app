import "../index.css";

import React from "react";
import Employee from "../Component/Employee";
import { useState } from "react";
import AddEmployee from "../Component/AddEmployee";
import EditEmployee from "../Component/EditEmployee";
import { v4 as uuidv4 } from "uuid";
import Header from "../Component/Header";

function Employees() {
  const showEmployees = true;

  const [role, setRole] = useState("developer");
  const [employees, setEmployees] = useState([
    {
      /**
       * todo : hello world
       * ?hello world
       * what is java
       */
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
    const updateEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App bg-gray-300 min-h-screen text-black">
      <Header />
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employees);
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>Employees not printed</p>
      )}
    </div>
  );
}

export default Employees;
