import React, { useState } from "react";
import "./ListItem.css";
//hooks-re rendering
// onState, onContext

const ListItem = (props) => {
  // let title = props.title;
  const [startTitle, setChangedTitle] = useState(props.title);
  const changeTitleHandler = () => {
    let title = "new updated title";
    console.log("title changed");
    setChangedTitle(title);
    setChangedTitle(props.title);
  };
  return (
    <div className="list-item-container">
      <h1>TITLE: {startTitle}</h1>
      <h3>Description: {props.description}</h3>
      <h3>Time: {props.time}</h3>

      <button onClick={changeTitleHandler}>change title</button>
    </div>
  );
};

export default ListItem;
