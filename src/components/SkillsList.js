import React from "react";
import Skill from "./Skill";

export const SkillsList = ({ skills, title }) => {
  return (
   
      <section className="container-list">
        <h3 className="padding">{title}</h3>
        <div className="padding">
          {skills.map((skill) => (
            <Skill skill={skill} />
          ))}
        </div>
      </section>
   
  );
};
