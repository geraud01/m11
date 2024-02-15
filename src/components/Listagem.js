// src/components/Listagem.js
import React, { useState, useEffect } from 'react';
import '../Styles/Listagem.css';

  
const Listagem = () => {
  // Defina o estado para armazenar os registros
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const registrosArmazenados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosArmazenados);
  }, []);

  return (
    <div>
      <h2>Página de Listagem</h2>
      <ul>
        {registros.map((registro, index) => (
          <li key={index}>{JSON.stringify(registro)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listagem;
