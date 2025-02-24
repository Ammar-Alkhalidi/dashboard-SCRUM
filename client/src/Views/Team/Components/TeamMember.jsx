import React from "react";
import "./css/TeamMember.css";

const TeamMember = ({ name, role, email, img }) => {
  return (
    <div className="team-member">
      <img className="team-img" src={img} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default TeamMember;
