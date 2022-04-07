import React, { FC, useEffect } from "react";
import axios from "axios";
import { CharacterType, ResultCharacter } from "../../models/CharacterType";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "./../../store/characters/charactersActions";
import { charactersReducer } from "./../../store/characters/charactersReducers";
import { selectCharacter } from "./../../store/characters/charactersSelectors";
import CardCustom from "../Card/CardCustom";
import "./style.css";
import { add } from "../../store/favourites/favourites.action";
type PropsTypes = {};
const List: FC<PropsTypes> = () => {
  useEffect(() => {
    loadData();
  }, []);
  const list = useSelector(selectCharacter);
  const dispatch = useDispatch();
  const loadData = async () => {
    const { data } = await axios.get<ResultCharacter>(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch(addList(data.results));
  };

  const handlerAdding = (character: CharacterType) => {
    dispatch(add(character));
  };

  return (
    <>
      <div className="list-container">
        {list &&
          list.map((character) => (
            <CardCustom character={character} handler={handlerAdding} />
          ))}
      </div>
    </>
  );
};

export default List;
