import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import Login from "./components/Login/Login";
import Grid from "@mui/material/Grid/Grid";
import Dark from "./components/Dark";

function App() {
  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={8}>
          <List />
        </Grid>
        <Grid item xs={4}>
          <Dark />
          <Login />
          <FavoritesList />
          
        </Grid>
      </Grid>
    </>
  );
}

export default App;
