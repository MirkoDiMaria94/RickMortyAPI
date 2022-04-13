import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "./../../store/login/login.selector";
import CardCustom from "../Card/CardCustom";
import { signIn,signOut} from "../../store/login/login.action";


const Login = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectLogin);
  console.log(account)
  return (
    <>
        <div>
        
        <button onClick={()=> dispatch(signIn(true))}>Loggati</button>
        <button onClick={()=> dispatch(signOut(false))}>Logout</button>
        <h1>{account === true ? "l'utente e' loggato" : "l'utente non è loggato"}</h1>
        </div>
    </>
  );
};

export default Login;
