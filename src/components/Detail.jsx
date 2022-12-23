import React, { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useNavigate, useParams, NavLink } from "react-router-dom";

export default function Detail(props) {
    const [character, setCharacter] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return;
    }, [id]);
    
    const volverHome = () => {
        navigate("/home")
    }
    return (
        <div className={style.containerDetail}>
            <div>
                <h2>Name: {character.name}</h2>
                <h3>Status: {character.status}</h3>
                <h3>Specie: {character.species}</h3>
                <h3>Genrer: {character.gender}</h3>
                <h3>Origin: {character.origin ? character.origin.name : ""}</h3>
            </div>
            <figure>
                <img src={character.image} alt={character.name} />
            </figure>
            <button onClick={volverHome}>Volver</button>
        </div>

    );
}