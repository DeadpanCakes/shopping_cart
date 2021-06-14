import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider(props) {
  const [loggedUser, setUser] = useState(false);
  const signIn = (user) => {
    if (!loggedUser) {
      setUser(user);
    }
  };
  const signOut = () => {
    if (loggedUser) {
      setUser(false);
    }
  };

  const user = { loggedUser, signIn, signOut };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export function UserConsumer(props) {
  return <UserContext.Consumer>{props.children}</UserContext.Consumer>;
}
