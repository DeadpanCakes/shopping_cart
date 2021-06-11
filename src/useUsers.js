import { useState, useEffect } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);

  const storeUsers = () => {
    window.localStorage.setItem("users", users);
  };

  const addUser = (newUser) => {
    setUsers((prevState) => prevState.concat(newUser));
    storeUsers();
  };

  useEffect(() => {
    const storedUsers = window.localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  return { users, addUser };
};

export default useUser;
