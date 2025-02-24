import React from "react";
import "./Team.css";
import { useTeam } from "../../Contexts/TeamProvider";
import TeamMember from "./Components/TeamMember";

const Team = () => {
  const { team } = useTeam();

  return (
    <section className="team">
      <div className="header-team">
        <h2>Team</h2>
        <button className="add-btn">Add New Member</button>
      </div>
      <div className="team-grid">
        {team.map((m) => (
          <TeamMember
            key={m.id}
            name={m.name}
            role={m.role}
            email={m.email}
            img={m.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
