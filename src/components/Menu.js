import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
        <li>
          <Link to="/listagem">Listagem</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

