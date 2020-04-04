import React, { useState, useEffect } from "react";
import "./Main.css";
import User from "../User/User";
const Main = () => {
  const [user, setUsers] = useState([]);
  const [friend, setFriend] = useState([]);
  const img = [
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3427971/pexels-photo-3427971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3563766/pexels-photo-3563766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3314986/pexels-photo-3314986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3252762/pexels-photo-3252762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1998456/pexels-photo-1998456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3917722/pexels-photo-3917722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1793302/pexels-photo-1793302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];
  const salary = [
    100000,
    15000,
    13000,
    25000,
    50000,
    125000,
    12000,
    23000,
    60000,
    10000
  ];
  const addFriend = val => {
    if (friend.length === 0) {
      //console.log("first");
      const newFriend = [...friend, val];
      setFriend(newFriend);
    } else {
      let tmp = 1;
      friend.forEach(x => {
        if (x.id === val.id) {
          tmp = 0;
        }
      });
      if (tmp === 0) {
        alert("hey you already added this ");
      } else {
        const newFriend = [...friend, val];
        setFriend(newFriend);
        //console.log("no");
      }
    }
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  let chk = 0;
  let total_salary = 0;
  user.map(x => {
    x.img = img[chk];
    x.salary = salary[chk];
    chk++;
  });
  //console.log(user);
  return (
    <div className="container">
      <div className="box-1">
        <User user={user} addFriend={addFriend} />
      </div>
      <div className="box-2">
        <h3>----Friend List----</h3>
        <h2>Number of Friend:{friend.length}</h2>
        <ul>
          {friend.map(x => (
            <li>{x.name}</li>
          ))}
        </ul>
        <p>
          Total Salary:
          {friend.map(x => {
            total_salary = total_salary + x.salary;
          })}
          {total_salary}
        </p>
      </div>
    </div>
  );
};
export default Main;
