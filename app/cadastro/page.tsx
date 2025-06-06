'use client';

import React, { useState } from 'react';

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    cpfcnpj: '',
    empresa: '',
    cargo: '',
    endereco: '',
    termos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', form);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Fundo com PNG */}
      <img
        src="/imagens/fundocadastro.jpg"
        alt="Fundo BRACHAT"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.3)', // leve escurecimento para contraste
          backdropFilter: 'blur(2px)',
          zIndex: 1,
        }}
      />

      {/* Formulário */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '320px',
            backgroundColor: '#e8e3dc',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Cadastro</h2>

          <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
          <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
          <input type="tel" name="telefone" placeholder="Telefone (com DDD)" value={form.telefone} onChange={handleChange} required />
          <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} required />
          <input type="password" name="confirmarSenha" placeholder="Confirmar senha" value={form.confirmarSenha} onChange={handleChange} required />
          <input type="text" name="cpfcnpj" placeholder="CPF ou CNPJ" value={form.cpfcnpj} onChange={handleChange} />
          <input type="text" name="empresa" placeholder="Empresa ou órgão público" value={form.empresa} onChange={handleChange} />
          <input type="text" name="cargo" placeholder="Cargo ou função" value={form.cargo} onChange={handleChange} />
          <input type="text" name="endereco" placeholder="Endereço (opcional)" value={form.endereco} onChange={handleChange} />

          <label style={{ fontSize: '14px' }}>
            <input
              type="checkbox"
              name="termos"
              checked={form.termos}
              onChange={handleChange}
              required
            />{' '}
            Aceito os termos de uso e política de privacidade
          </label>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#8d8270',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}









