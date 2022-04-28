import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

const Friend = ({availability, setavailability}) => {
  return (
    <>
     
      
      <hr />
      <div className="App"> {availability}</div>
    </>
  );
};

export default Friend;
