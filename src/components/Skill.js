import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ActionItem } from "./ActionItem";

const Skill = ({ skill }) => {
  const [isTransition, setTransition] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const lastActions = skill.actions.slice(0, 2);

  const showActions = () => {
    if (isDisplayed) {
      setTransition(false);
      setTimeout(() => {
        setIsDisplayed(false);
      }, 20);
    } else {
      setIsDisplayed(true);
      setTimeout(() => {
        setTransition(true);
      }, 20);
    }
  };

  return (
    <div className="skill-container">
      <div className="skill-header">
        <div className="skill-name">{skill.name}</div>
        {skill.level}
        <div
          className="expand-div"
          onClick={() => {
            showActions();
          }}
        >
          {isDisplayed ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div
        className={
          isDisplayed && isTransition
            ? "info-container info-container-is-displayed info-container-is-transition"
            : isDisplayed && !isTransition
            ? "info-container info-container-is-displayed"
            : "info-container"
        }
      >
        {lastActions.length > 0
          ? lastActions.map((action) => <ActionItem action={action} />)
          : "No action for this skill"}
      </div>
    </div>
  );
};

export default Skill;
