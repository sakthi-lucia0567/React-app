import React from "react";

function Naruto(props) {
  return (
    <>
      <div>{props.name}</div>
      {/* <p>{props.role ? props.role : "No Role"}</p> */}
      {props.role ? <p>{props.role}</p> : <p>No Role</p>}
      <div></div>
    </>
  );
}

export default Naruto;
