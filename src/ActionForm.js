import { useState } from "react";

export const ActionForm = ({ skills }) => {
  const [inputError, setInputError] = useState(null);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(skills[0].id);

  const levels = [1, 2, 3, 4, 5];

  const [level, setLevel] = useState(levels[0]);



  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);

    if (value.length < 5) {
      setInputError("Input must be at least 5 characters");
    } else {
      setInputError(null);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length >= 5 && skill) {
      // submit form
      console.log("ok !!!");
      window.location = "/test";
    } else {
      setInputError("Input must be at least 5 characters");
    }
  }

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

      <label>Skill </label>

      <select value={skill} onChange={handleSkillChange}>
        {skills.map((la, i) => (
          <option key={i} value={la.id}>
            {la.name}
          </option>
        ))}
      </select>

      <label>Level </label>

      <select value={level} onChange={handleLevelChange}>
        {levels.map((la, i) => (
          <option key={i} value={la}>
            {la}
          </option>
        ))}
      </select>

      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};
