import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Searcher } from "./Searcher";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/internacional">Internacional</Link>
        </li>
        <li>
          <Link to="/tecnologia">Tecnologia</Link>
        </li>
        <li>
          <Link to="/espectaculo">Espectaculo</Link>
        </li>
        <li>
          <Link to="/deportes">Deportes</Link>
        </li>
      </ul>

      <div>
        <div>
          <Searcher />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
