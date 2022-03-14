import { useState } from "react";
const NewListItem = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  // two way binding
  const submitHandler = (event) => {
    event.preventDefault(); // prevents default behaviour of refresh

    const newListData = {
      title: enteredTitle,
      description: enteredDescription,
      time: enteredTime,
    };

    // console.log(enteredTitle, enteredDescription);
    props.onSaveListData(newListData);
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredTime("");
  };

  const titleChangeHandler = (event) => {
    // setEnteredTitle();
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          value={enteredTitle}
          type="text"
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          value={enteredDescription}
          type="text"
          onChange={descriptionChangeHandler}
        ></input>
      </div>
      <div>
        <label>Time required</label>
        <input
          value={enteredTime}
          type="text"
          onChange={timeChangeHandler}
        ></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default NewListItem;
