import React, { useState,useEffect, useCallback } from "react";
import RoleModel from "./components/Card/RoleModel";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./App.css";

const App = () => {
  // state management
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetching data from firebase and error handling.
  const fetchUserHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://rolemodel-http-81f1e-default-rtdb.firebaseio.com/user.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedUser = [];

      for (const key in data) {
        loadedUser.push({
          id: Math.random().toString(),
          src: data[key].imageUrl,
          name: data[key].userName,
          about: data[key].userAbout,
          creator: data[key].personName,
        });
      }
      setUserList(loadedUser);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  //Function for adding User through form (asynchronously)
  const addUserHandler = async (user) => {
    const response = await fetch(
      "https://rolemodel-http-81f1e-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  // If you are fetching some data from firebase.
  let buttonContent = <span>See RoleModel</span>;
  if (isLoading) {
    buttonContent = <span> Loading...</span>;
  }

  // if getting an error (i.e If you are not connected to internet, api doesn't work or something else)
  let errorContent = <h3></h3>;
  if (error) {
    errorContent = <h3>{error}</h3>;
  }

  // return some JSX
  return (
    <React.Fragment>
      <Header />
      <section className="section">{errorContent}</section>
      <section>
        <button onClick={fetchUserHandler}>{buttonContent}</button>
      </section>
      <RoleModel
        users={userList}
        onAddUser={addUserHandler}
        fetchUser={fetchUserHandler}
      />
      <Footer />
    </React.Fragment>
  );
};

export default App;
