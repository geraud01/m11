import React, { useState } from 'react';
import '../Styles/Cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereço, setEndereço] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria um objeto com os dados do novo registro
    const novoRegistro = { nome, sobreNome, email, endereço, cidade, estado, cep, telefone, bairro };

    const registrosExistente =
      JSON.parse(localStorage.getItem('registros')) || [];

    // Adiciona o novo registro à lista existente
    const novosRegistros = [...registrosExistente, novoRegistro];

    // Armazena os registros atualizados no localStorage
    localStorage.setItem('registros', JSON.stringify(novosRegistros));

    // Limpa os campos após o envio
    setNome('');
    setSobreNome('');
    setEmail('');
    setTelefone('');
    setEndereço('');
    setCidade('');
    setEstado('');
    setCep('');
    setBairro('');
  };

  return (
    <form className="cadastro-container">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Cadastro</h2>
          <p className="mt-2 text-sm leading-2 text-gray-400">Preencha os dados abaixo</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Primeiro nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Sobrenome:</label>
          <input type="text" value={sobreNome} onChange={(e) => setSobreNome(e.target.value)} name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="telefone" className="block text-sm font-medium leading-6 text-gray-900">Telefone:</label>
          <input id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} name="telefone" type="tel" autoComplete="telefone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Endereço:</label>
          <input type="text" value={endereço} onChange={(e) => setEndereço(e.target.value)} name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">Bairro:</label>
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} name="bairro" id="bairro" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Cidade:</label>
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Estado:</label>
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / CEP:</label>
          <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Cadastro;
