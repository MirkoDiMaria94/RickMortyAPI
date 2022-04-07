import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "./../../store/favourites/favourites.selector";
import CardCustom from "../Card/CardCustom";
import { remove } from "../../store/favourites/favourites.action";
import { CharacterType } from "../../models/CharacterType";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const listFavorites = useSelector(selectFavourites);
  const handlerRemove = (character: CharacterType) => {
    dispatch(remove(character.id));
  };
  return (
    <div className="container">
      {listFavorites &&
        listFavorites.map((character) => (
          <CardCustom character={character} handler={handlerRemove} />
        ))}
    </div>
  );
};

export default FavoritesList;
