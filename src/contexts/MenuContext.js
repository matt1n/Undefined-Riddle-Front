import { createContext, useState } from "react";

export const MenuContext = createContext({});

function MenuProvider({ children }) {
    const [menuActive, setMenuActive] = useState(false)
  return (
    <MenuContext.Provider value={{menuActive, setMenuActive}}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;