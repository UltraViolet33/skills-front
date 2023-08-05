import { useEffect, useState } from "react";
import "./App.css";
import { skillsServices } from "./services/skills.services";

const Skill = ({ skills, title }) => {
  return (
    <div>
      <h3>{title} Skills</h3>
      {skills.map((skill) => (
        <p>{skill.name}</p>
      ))}
    </div>
  );
};

function App() {
  const [skills, setSkills] = useState();

  const getAllSkills = async () => {
    const data = await skillsServices.getAllSkills();
    // console.log(data);
    setSkills(data);
    return data;
  };

  useEffect(() => {
    getAllSkills();
  }, []);

  return (
    <div>
      {skills && (
        <div>
          <Skill title="Principal" skills={skills.compulsory}></Skill>
          <Skill title="Basic" skills={skills.basic}></Skill>
          <Skill title="Personal" skills={skills.personal}></Skill>
        </div>
      )}
    </div>
  );
}

export default App;