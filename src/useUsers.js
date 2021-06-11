import { useState, useEffect } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevState) => prevState.concat(newUser));
  };

  useEffect(() => {
    const storedUsers = window.localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  useEffect(() => {
    const usersJSON = JSON.stringify(users);
    window.localStorage.setItem("users", usersJSON);
  }, [users]);

  return { users, addUser };
};

export default useUser;
