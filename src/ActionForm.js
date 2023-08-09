import { useState } from "react";
import { actionsServices } from "./services/actions.services";

export const ActionForm = ({ skills, fetchData }) => {
  const [resultMsg, setResultMsg] = useState(null);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(skills[0].id);

  const levels = [1, 2, 3, 4, 5];
  const [level, setLevel] = useState(levels[0]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (name.length >= 1 && skill && level) {
      try {
        const response = await actionsServices.addAction({
          id_skill: skill,
          name: name,
          level: level,
        });

        console.log(response);
        setResultMsg("Success");
        fetchData();
      } catch (e) {
        console.log(e);
        setResultMsg(`Error : ${e}`);
      }
    } else {
      setResultMsg("Missing fields");
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Action Name</label>
      <input type="text" value={name} onChange={handleNameChange} />

      <label>Skill</label>
      <select value={skill} onChange={handleSkillChange}>
        {skills.map((skill, i) => (
          <option key={i} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>

      <label>Level </label>
      <select value={level} onChange={handleLevelChange}>
        {levels.map((level, i) => (
          <option key={i} value={level}>
            {level}
          </option>
        ))}
      </select>

      {resultMsg && <div style={{ color: "red" }}>{resultMsg}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};
