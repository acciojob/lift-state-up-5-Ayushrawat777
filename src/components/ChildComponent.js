import React from "react";
import { useState } from "react";
const ChildComponent = ({ submitForm, isLoggedIn }) => {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={submitForm}>
          Username:{" "}
          <input type="text" name="username" id="name" onChange={onchange} />
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            onChange={onchange}
          />
          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default ChildComponent;
