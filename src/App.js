import { useEffect, useState } from "react";
import { skillsServices } from "./services/skills.services";
import { userServices } from "./services/user.services";
import { ActionForm } from "./ActionForm";
import "./App.css";

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
  const [userData, setUserData] = useState();
  const [isFormShowing, setIsFormShowing] = useState(false);

  const getAllSkills = async () => {
    const data = await skillsServices.getAllSkills();
    console.log(data);
    setSkills(data);
    return data;
  };

  // const getUserData = async () => {
  //   const data = await userServices.getUserData();
  //   console.log(data);
  //   setUserData(data);
  //   return data;
  // };

  const getUserData = () => {
    const data = userServices.getUserData().then((data) => {
      console.log(data);
      setUserData(data);
    });
    // console.log(data);
    // setUserData(data);
    // return data;
  };

  const getSkillsArray = () => {
    let skillArray = Object.values(skills);

    let newSkill = skillArray[0].concat(skillArray[1], skillArray[2]);

    return newSkill;
  };

  useEffect(() => {
    getUserData();
    getAllSkills();
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <p>{userData.username}</p>
          <p>{userData.level}</p>
          <button onClick={() => setIsFormShowing(!isFormShowing)}>
            Add Action
          </button>
        </div>
      )}
      {skills && <ActionForm skills={getSkillsArray()} />}

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
