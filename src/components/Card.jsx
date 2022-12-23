import React from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={style.containerChar}>
         <button className={style.botonX} onClick={() => props.onClose(props.id)}>X</button>
         <img  src={props.image} alt="" />
         <NavLink to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
         </NavLink>
         <div className={style.containerData}>
            <h2 className={style.fontW100}>{props.species}</h2>
            <h2 className={style.fontW100}>{props.gender}</h2>
         </div>
      </div>
   );
}
