import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import FavoritesList from "./components/FavoritesList/FavoritesList";

function App() {
  return (
    <>
      <List />
      <FavoritesList />
    </>
  );
}

export default App;
