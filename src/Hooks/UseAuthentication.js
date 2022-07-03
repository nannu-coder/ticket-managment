import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const UseAuthentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log(loggedIn);


  async function getLoggedIn() {
    setIsLoading(true);
    await axios
      .get("http://localhost:5000/loggedIn", {
        withCredentials: true,
      })
      .then((res) => {
        setLoggedIn(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function logOut() {
    setIsLoading(true);
    await axios
      .get("http://localhost:5000/signout", { withCredentials: true })
      .then((res) => setLoggedIn(res?.data))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getLoggedIn();
  }, [loggedIn]);

  return {
    getLoggedIn,
    loggedIn,
    logOut,
    isLoading,
  };
};

export default UseAuthentication;
