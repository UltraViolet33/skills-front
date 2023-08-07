import React from "react";
import Skill from "./Skill";

const SkillsList = ({ skills, title }) => {
  return (
    <div>
      <h3>{title} Skills</h3>
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;
