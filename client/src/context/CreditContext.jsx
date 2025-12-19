import { createContext, useContext, useState } from "react";

const CreditContext = createContext();

export function CreditProvider({ children }) {
  const [credits, setCredits] = useState(500); // Free plan default
  const [usage, setUsage] = useState({});

  const consumeCredits = (toolId, amount) => {
    if (credits < amount) return false;

    setCredits((prev) => prev - amount);
    setUsage((prev) => ({
      ...prev,
      [toolId]: (prev[toolId] || 0) + amount,
    }));

    return true;
  };

  return (
    <CreditContext.Provider
      value={{
        credits,
        usage,
        consumeCredits,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
}

export const useCredits = () => useContext(CreditContext);
