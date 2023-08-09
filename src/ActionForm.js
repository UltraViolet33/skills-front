import { useState } from "react";
import { actionsServices } from "./services/actions.services";

export const ActionForm = ({ skills, fetchData }) => {
  const [resultMsg, setResultMsg] = useState(null);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(skills[0].id);

  const [colorMsgClass, setColorMsgClass] = useState(null);

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
        setColorMsgClass("success-color");
        setResultMsg("Success");
        fetchData();
      } catch (e) {
        console.log(e);
        setColorMsgClass("error-color");
        setResultMsg(`Error : ${e}`);
      }
    } else {
      setColorMsgClass("error-color");
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
    <form className="action-form" onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        placeholder="Action name"
        value={name}
        onChange={handleNameChange}
      />
      <div className="select-input">
        <label>Skill</label>
        <select value={skill} onChange={handleSkillChange}>
          {skills.map((skill, i) => (
            <option key={i} value={skill.id}>
              {skill.name}
            </option>
          ))}
        </select>
      </div>
      <div className="select-input">
        <label>Level </label>
        <select value={level} onChange={handleLevelChange}>
          {levels.map((level, i) => (
            <option key={i} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      {resultMsg && (
        <div className={colorMsgClass + " result-msg"}>{resultMsg}</div>
      )}
      <button className="btn-submit" type="submit">
        Submit
      </button>
    </form>
  );
};
