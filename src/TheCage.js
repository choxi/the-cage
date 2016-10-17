import React from "react";
import nicks from "./lib/nicks.js";

const TheCage = () => {
  return (
    <div className="Cage grid grid-response">
      <div className="cages">
        {nicks.map((nick, i) => (
          <img key={i} className="nick" alt={nick.alt} src={nick.image} />
        ))}
      </div>
    </div>
  );
}

export default TheCage;
