// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import NewListItem from "./components/NewListItem/NewListitem";

function App() {
  //dont directly update state
  const saveListData = (newListItem) => {
    setTaskList((list) => [...list, newListItem]);
  };
  const list = [
    { title: "one", description: "one desc", time: "0" },
    { title: "two", description: "two desc", time: "10" },
    { title: "three", description: "three desc", time: "10" },
  ];
  const [taskList, setTaskList] = useState(list);
  return (
    <div className="App">
      <List list={taskList} />
      <br />
      <NewListItem onSaveListData={saveListData} />
    </div>
  );
}

export default App;
