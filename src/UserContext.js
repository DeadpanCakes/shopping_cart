import { createContext, useState, useEffect } from "react";
import useUsers from "./useUsers";

const UserContext = createContext();

export function UserProvider(props) {
  const { users, addUser, editUser } = useUsers();
  const [loggedId, setLoggedId] = useState(false);
  const [user, setUser] = useState({});

  const signIn = (id) => {
    if (!loggedId) {
      setLoggedId(id);
    }
  };
  const signOut = () => {
    if (loggedId) {
      setLoggedId(false);
    }
  };
  useEffect(() => {
    setUser(
      users.find((user) => user.id === loggedId)
    );
  }, [users, loggedId]);

  return (
    <UserContext.Provider value={{users: users, addUser: addUser, loggedUser: user, signOut, signIn, editUser: editUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export function UserConsumer(props) {
  return <UserContext.Consumer>{props.children}</UserContext.Consumer>;
}
