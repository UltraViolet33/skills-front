import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <p>{skill.name}</p>
      <p>{skill.level}</p>
    </div>
  );
};

export default Skill;
