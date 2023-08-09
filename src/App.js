import { useEffect, useState } from "react";
import { skillsServices } from "./services/skills.services";
import { userServices } from "./services/user.services";
import { ActionForm } from "./ActionForm";
import {SkillsList} from "./components/SkillsList";
import "./App.css";

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

  const getUserData = async () => {
    const data = await userServices.getUserData();
    console.log(data);
    setUserData(data);
    return data;
  };

  const getSkillsArray = () => {
    let skillArray = Object.values(skills);

    let newSkill = skillArray[0].concat(skillArray[1], skillArray[2]);

    return newSkill;
  };


  const fetchData = () => {
    getUserData();
    getAllSkills();
  }

  useEffect(() => {
    // getUserData();
    // getAllSkills();
    fetchData();
  }, []);

  return (
    <div>
      {userData && (
        <header className="header">
          <p>{userData.username}</p>
          <p>Level {userData.level}</p>
        </header>
      )}

      <button onClick={() => setIsFormShowing(!isFormShowing)}>
        Add Action
      </button>
      {skills && isFormShowing && <ActionForm fetchData={fetchData} skills={getSkillsArray()} />}

      {skills && (
        <div>
          <SkillsList title="Principal" skills={skills.compulsory} />
          <SkillsList title="Basic" skills={skills.basic} />
          <SkillsList title="Personal" skills={skills.personal} />
        </div>
      )}
    </div>
  );
}

export default App;
