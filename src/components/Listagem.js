// src/components/Listagem.js
import React, { useState, useEffect } from 'react';
import '../Styles/cadastro.css';

const Listagem = () => {
  // Defina o estado para armazenar os registros
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    // Aqui você pode buscar os registros armazenados (pode ser de um banco de dados, localStorage, etc.)
    // Exemplo: obtendo registros armazenados no localStorage
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
