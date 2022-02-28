import React from "react";
import Form from "../Form/Form";
import Card from "./Card";
import RoleModelCard from "./RoleModelCard";
import classes from "./RoleModel.module.css";

const Pokedex = (props) => {
  const addUserHandler = (user)=>{
    props.onAddUser(user);
  }

  // Logic for displaying each roleModelCard.
  const roleModelList = props.users.map((char) => (
    <RoleModelCard
    imgsrc={char.src}
    name={char.name}
    about={char.about}
    key={char.id}
    creatorName={char.creator}
    /> 
  ));

  return (
    <React.Fragment>
      <Card className={classes.login}>
        <Form onAddUser={addUserHandler} fetchUserHandler={props.fetchUser}/>
      </Card>
      <div className={classes.roleModel_card}>{roleModelList}</div>
    </React.Fragment>
  );
};

export default Pokedex;
