import React from "react";
import classes from "./RoleModelCard.module.css";

const RoleModelCard = (props) => {
  return (
    <div className={classes.roleModel}>
      <img src={props.imgsrc} alt={`RoleModel :- ${props.name}`} />
      <h3>{props.name}</h3>
      <div className={classes.typ}>{props.about}</div>
      <div  className={classes.creatorName}>By: {props.creatorName}</div>
    </div>
  );
};

export default RoleModelCard;
