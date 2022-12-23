import React, { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import "./global.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Detail from "./components/Detail.jsx";

function App() {
    const [characters, setCharacters] = useState([]);
    const navigate = Navigate();
    navigate("/home");
    const onSearch = (character) => {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    let existe = false;
                    characters.forEach((char) => {
                        if (char.name === data.name) {
                            existe = true;
                        }
                    });
                    if (!existe) {
                        setCharacters((oldChars) => [...oldChars, data]);
                    } else {
                        alert("Ya existe un personaje con ese ID");
                    }
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    };
    const onClose = (id) => {
        setCharacters((oldChars) => {
            return oldChars.filter((char) => char.id !== id);
        });
    };
    const random = () => {
        const charRandom = Math.floor(Math.random() * (826 - 1 + 1) + 1);
        onSearch(charRandom);
    };
    return (
        <div>
            <Nav onSearch={onSearch} random={random} />
            <Routes>
                <Route path="/home" element={ <Cards onClose={onClose} characters={characters} /> }/>
                <Route path="/about" element={ <About /> }/>
                <Route path="/detail/:id" element={ <Detail /> } />
            </Routes>
            <Footer />
            
        </div>
    );
}

export default App;
