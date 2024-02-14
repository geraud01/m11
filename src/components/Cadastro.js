import React, { useState } from 'react';
import '../Styles/cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar um objeto com os dados do novo registro
    const novoRegistro = { nome, email, telefone };

    // Obter os registros existentes do localStorage (ou de outra fonte)
    const registrosExistente =
      JSON.parse(localStorage.getItem('registros')) || [];

    // Adicionar o novo registro à lista existente
    const novosRegistros = [...registrosExistente, novoRegistro];

    // Armazenar os registros atualizados no localStorage
    localStorage.setItem('registros', JSON.stringify(novosRegistros));

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <div>
      <h2>Página de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário aqui */}
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

