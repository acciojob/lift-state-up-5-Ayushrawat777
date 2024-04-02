import react, { useState } from "react";
import './../styles/App.css';
import "./App.css";
import ChildComponent from "./ChildComponent";

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <div>
         <h1>Parent Component</h1>
      <div>
          <ChildComponent isLoggedIn={isLoggedIn} submitForm={submitForm} />
     
      </div>
    </div>
  )
}

export default App
