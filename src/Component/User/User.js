import React from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const User = props => {
  // console.log(props);
  return (
    <div className="u">
      {props.user.map(x => (
        <div className="user-box">
          <img src={x.img} alt="" />
          <p>
            <b>Name:</b> {x.name}
          </p>
          <p>
            <b>User:</b> {x.username}
          </p>
          <p>
            <b>E-mail:</b> {x.email}
          </p>
          <p>
            <b>Phone:</b> {x.phone}
          </p>
          <p>
            <b>Salary:</b> {x.salary}
          </p>
          <br />
          <button className="btn" onClick={() => props.addFriend(x)}>
            <FontAwesomeIcon icon={faCoffee} />
            Add friend
          </button>
        </div>
      ))}
    </div>
  );
};
export default User;
