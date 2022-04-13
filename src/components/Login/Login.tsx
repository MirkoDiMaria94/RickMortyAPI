import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "./../../store/login/login.selector";
import CardCustom from "../Card/CardCustom";
import { signIn, signOut } from "../../store/login/login.action";
import Button from "@mui/material/Button/Button";

const Login = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectLogin);
  console.log(account);
  return (
    <>
      <div>
        <div className="button">
          <Button
            onClick={() => dispatch(signIn(true))}
            variant="contained"
            color="success"
          >
            Loggati
          </Button>

          <Button
            onClick={() => dispatch(signOut(false))}
            variant="contained"
            color="error"
          >
            Logout
          </Button>
        </div>

        <h1>
          {account === true ? "l'utente e' loggato" : "l'utente non è loggato"}
        </h1>
      </div>
    </>
  );
};

export default Login;
