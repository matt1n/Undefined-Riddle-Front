import { createContext, useState } from "react";

export const LightContext = createContext({});

function LightProvider({ children }) {
    const [light, setLight] = useState(false)
  return (
    <LightContext.Provider value={{light, setLight}}>
      {children}
    </LightContext.Provider>
  );
}

export default LightProvider;