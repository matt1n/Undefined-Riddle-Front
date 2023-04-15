import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem("undefinedUser"))
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;