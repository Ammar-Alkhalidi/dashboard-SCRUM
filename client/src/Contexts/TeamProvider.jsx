import { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  // State für Teamliste
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      email: "john.doe@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      email: "jane.smith@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "UI/UX Designer",
      email: "alice.brown@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 4,
      name: "Bob Johnson",
      role: "DevOps Engineer",
      email: "bob.johnson@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 5,
      name: "Charlie Davis",
      role: "QA Engineer",
      email: "charlie.davis@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 6,
      name: "Diana Evans",
      role: "Marketing Specialist",
      email: "diana.evans@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 7,
      name: "Ethan Green",
      role: "Product Owner",
      email: "ethan.green@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 8,
      name: "Fiona Harris",
      role: "HR Manager",
      email: "fiona.harris@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 9,
      name: "George White",
      role: "Backend Developer",
      email: "george.white@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 10,
      name: "Hannah King",
      role: "Frontend Developer",
      email: "hannah.king@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 11,
      name: "Ian Lewis",
      role: "Data Analyst",
      email: "ian.lewis@example.com",
      img: "https://placehold.co/150",
    },
    {
      id: 12,
      name: "Jessica Hall",
      role: "Customer Support",
      email: "jessica.hall@example.com",
      img: "https://placehold.co/150",
    },
  ]);
  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  return useContext(TeamContext);
};
