// src/components/Listagem.js
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Styles/Botao.css';

const Listagem = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const registrosArmazenados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosArmazenados);
  }, []);

  const handleLimparLista = () => {
    setRegistros([]);
    localStorage.removeItem('registros');
  };

  return (
    <div style={{ maxWidth: '1300px', margin: '3rem auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom:'2rem' }}>Página de Listagem</h2>
      {registros.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Sobrenome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Endereço</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>CEP</TableCell>
                <TableCell>Telefone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registros.map((registro, index) => (
                <TableRow key={index}>
                  <TableCell>{registro.nome}</TableCell>
                  <TableCell>{registro.sobreNome}</TableCell>
                  <TableCell>{registro.email}</TableCell>
                  <TableCell>{registro.endereço}</TableCell>
                  <TableCell>{registro.cidade}</TableCell>
                  <TableCell>{registro.estado}</TableCell>
                  <TableCell>{registro.cep}</TableCell>
                  <TableCell>{registro.telefone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p style={{ textAlign: 'center' }}>Nenhum registro encontrado.</p>
      )}
      <div className="bottomCenter">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleLimparLista}>
            Limpar Lista
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Listagem;
