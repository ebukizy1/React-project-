import React from "react";
import { useLocation } from "react-router-dom";


const User = () => {
    const location = useLocation().state;
    console.log("user ...> ", location.value)
  return (
    <div>
      <div>User</div>
      
    </div>
  )
}

export default User
