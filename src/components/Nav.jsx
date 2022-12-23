import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
        <div className={styles.containerNav}>
            <ul className={styles.links}>
                <li>
                    <NavLink to="/home" className={({ isActive }) => isActive ? styles.linkActive : ""}>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : ""}>
                        <span>About</span>
                    </NavLink>
                </li>
            </ul>

            <button onClick={props.random}>Random</button>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nav;