import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import classes from "./Form.module.css";

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const imageUrlRef = useRef("");
  const userNameRef = useRef("");
  const aboutUSRef = useRef("");
  const personNameRef = useRef("");

  const resetInput = () => {
    imageUrlRef.current.value =
    userNameRef.current.value =
    aboutUSRef.current.value =
    personNameRef.current.value =
      "";
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const user = {
      id: Math.random().toString(),
      imageUrl: imageUrlRef.current.value,
      userName: userNameRef.current.value,
      userAbout: aboutUSRef.current.value,
      personName: personNameRef.current.value,
    };
    props.onAddUser(user);

    resetInput();

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  let buttonContent = <span>Add Your Role Model</span>;
  if (isLoading) {
    buttonContent = <span>Adding....</span>;
  }

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={addUserHandler}>
        <h1>Your Role Model</h1>
        <input type="text" placeholder="RoleModelName" ref={userNameRef} />
        <input type="text" placeholder="ImageURL" ref={imageUrlRef} />
        <input type="text" placeholder="About" ref={aboutUSRef} />
        <input type="text" placeholder="Your Name" ref={personNameRef} />
        <Button type="submit">{buttonContent}</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
