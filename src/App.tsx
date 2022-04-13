import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Login />
      <List />
      <FavoritesList />

    </>
  );
}

export default App;
