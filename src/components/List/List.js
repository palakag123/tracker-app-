import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = (props) => {
  return (
    <div className="lists-container">
      {props.list.map((item, index) => (
        <ListItem
          title={item.title}
          description={item.description}
          time={item.time}
        ></ListItem>
      ))}
    </div>
  );
};

export default List;
