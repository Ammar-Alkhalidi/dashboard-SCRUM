import React from 'react'
import './Team.css'
import { useTeam } from '../../Contexts/TeamProvider'
import TeamMember from './Components/TeamMember'


const Team = () => {
  const { team } = useTeam();

  return (
    <section className="team-container">
      <div className="header">
        <h2>Team</h2>
        <button className="add-btn">Add New Member</button>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;


