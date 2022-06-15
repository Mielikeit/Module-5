import Userscore from "../Components/Userscore";
import Navbar from "../Components/Navbar";
import "./Leaderboard.css";

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDocs } from "firebase/firestore";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="Leaderboard">
      {users.map((users) => {
        return (
          <div key={users.id}>
            <p>{users.username}</p>
            <p>{users.score}</p>
          </div>
        );
      })}

      {/* <div className="grid-container">
        <div class="grid-item">
          <Userscore user="mo" score="200" />
        </div>
        <div class="grid-item">
          <Userscore user="minionrush456" score="0" />
        </div>
        <div class="grid-item">
          <Userscore user="unicronluver123" score="468" />
        </div>
        <div class="grid-item">
          <Userscore user="gloomii" score="5" />
        </div>
        <div class="grid-item">
          <Userscore user="minionrush789" score="100" />
        </div>
        <div class="grid-item">
          <Userscore user="h9rh9rh9r" score="1414" />
        </div>
      </div>

      <Navbar /> */}
    </div>
  );
}
