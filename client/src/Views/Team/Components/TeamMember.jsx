import React from "react";
import "./css/TeamMember.css";

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.img} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <a href={`mailto:${member.email}`}>{member.email}</a>
    </div>
  );
};

export default TeamMember;
// Compare this snippet from client/src/Views/Team/Components/TeamMember.jsx:
// import React from "react";
// import "./TeamMember.css";
//
// const TeamMember = ({ member }) =>
//   <div className="team-member"></div>
//     <img src={member.img} alt={member.name} />