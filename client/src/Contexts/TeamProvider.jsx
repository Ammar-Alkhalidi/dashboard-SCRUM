import { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  // State für Teamliste
  const [team, setTeam] = useState([]);
  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  return useContext(TeamContext);
};
