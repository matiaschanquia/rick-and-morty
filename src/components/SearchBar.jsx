import React, { useState }from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   const changeHandler = (e) => {
      setCharacter(e.target.value)
   }
   return (
      <div className={style.containerSearch}>
         <input type='search' onChange={changeHandler}/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
