import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = (props) => {
  console.log(props);
  return (
    <ul className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} handleDelete={props.handleDelete} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, handleDelete }) => {
  return (
    <article>
      <img src={img} alt={nome} className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => handleDelete(id)}>
            <RiDeleteBack2Fill className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
