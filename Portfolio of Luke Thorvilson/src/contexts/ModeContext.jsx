import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

function ModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ModeContext.Provider>
  );
}

function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined)
    throw new Error("Context called outside context scope!");
  return context;
}

export { ModeProvider, useMode };
