import React, { FC } from "react";
import "./style.css";

import { CharacterType } from "../../models/CharacterType";
type PropsTypes = {
  character: CharacterType;
  handler: (character: CharacterType) => void;
};
const CardCustom: FC<PropsTypes> = ({ character, handler }) => {
  return (
    <div className="card">
      <img src={character.image} alt="" width="100%" height="auto" />
      <h1>{character.name}</h1>
      <button onClick={() => handler(character)}>add</button>
    </div>
  );
};

export default CardCustom;
