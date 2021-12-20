import React, { useState } from "react";
import "./SingleQuestion.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Accordion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="questionCard">
      <header className="header">
        {/* <div className="headerDiv"> */}
        <h4>{title}</h4>
        <button className="btn" onClick={() => toggleInfo()}>
          {!showInfo ? (
            <AiOutlinePlus className="btnIcon" />
          ) : (
            <AiOutlineMinus className="btnIcon" />
          )}
        </button>
        {/* </div> */}
      </header>
      {showInfo ? <p className="info">{info}</p> : ""}
    </article>
  );
}

export default Accordion;
