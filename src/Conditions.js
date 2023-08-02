import React, { useState } from 'react';

const Conditions = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
    content = (
      <div style={{backgroundColor:"#c9d487"}}>
        <h3>Welcome, User!</h3>
        <button style={{backgroundColor:"#9f4e44", fontSize:"15px"}} onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div style={{backgroundColor:"#40E0D0"}}>
        <h3>Please login to continue.</h3>
        <button style={{backgroundColor:"#6495ED", fontSize:"15px"}} onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div >
      <h2>Using Conditional Concept</h2>
      {content}
    </div>
  );
};

export default Conditions;