import React from "react";
import "./styles.css";

const SomeListComponent = props => {
  const handleClick = index => {
    props.onClick(index);
  };

  const renderElement = (item, index) => (
    <li key={index} onClick={() => handleClick(index)}>
      {item.text}
    </li>
  );

  return (
    <ul className="list-background">
      {props.items.map((item, i) => renderElement(item, i))}
    </ul>
  );
};

export default SomeListComponent;
