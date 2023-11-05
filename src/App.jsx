import React from "react";
import Login from "./components/login";
// import Details from "./components/details";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Login user={user} />
      {/* <Details prop={user} /> */}
    </>
  );
}

export default App;
