'use client';

import React from 'react';
import Link from 'next/link';

export default function BTSoloPlanos() {
  const linkStyle = {
    color: '#E3D5C3',
    fontSize: '15px',
    fontWeight: '500',
    textDecoration: 'none',
    textShadow: '0 1px 2px rgba(0,0,0,0.7)',
  };

  return (
    <main
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        color: 'white',
        fontFamily: 'Georgia, serif',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Cabeçalho */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        backgroundColor: 'rgba(30,30,30,0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: 20
      }}>
        <div style={{ fontSize: '50px', fontWeight: 'bold', color: '#E3D5C3' }}>
          BrachaT
        </div>
        <nav style={{ display: 'flex', gap: '40px' }}>
          <Link href="/sobre" style={linkStyle}>Sobre Nós</Link>
          <Link href="/responsabilidade" style={linkStyle}>Responsabilidade Social</Link>
          <Link href="/Notícias" style={linkStyle}>Noticias</Link>
          <Link href="/contato" style={linkStyle}>Contato</Link>
        </nav>
      </header>

      {/* Conteúdo da Página de Planos */}
      <div style={{
        flex: 1,
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#E3D5C3',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          Escolha seu plano e acesse o mapa normativo agora
        </h1>

        {/* Cards */}
        <div style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '16px',
            padding: '32px',
            width: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#fff' }}>Plano Profissional</h2>
            <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
              R$ 197,00<span style={{ fontSize: '16px' }}>/mês</span>
            </p>
            <ul style={{
              fontSize: '15px',
              lineHeight: '1.8',
              marginBottom: '24px',
              textAlign: 'left',
              paddingLeft: '20px'
            }}>
              <li>Até 30 consultas por mês</li>
              <li>Acesso completo ao mapa normativo</li>
              <li>Visualização de recuos, gabarito, uso e status do terreno</li>
              <li>Suporte técnico por e-mail</li>
            </ul>
            <button style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#E3D5C3',
              color: '#1e1e1e',
              fontWeight: 600,
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 0 6px rgba(227,213,195,0.4), 0 0 10px rgba(227,213,195,0.2)',
              transition: 'all 0.3s ease-in-out',
            }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#d4c2aa';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(227,213,195,0.6), 0 0 20px rgba(227,213,195,0.3)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#E3D5C3';
                e.currentTarget.style.boxShadow = '0 0 6px rgba(227,213,195,0.4), 0 0 10px rgba(227,213,195,0.2)';
              }}>
              Contratar plano profissional
            </button>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '16px',
            padding: '32px',
            width: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#fff' }}>Plano Ilimitado</h2>
            <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
              R$ 590,00<span style={{ fontSize: '16px' }}>/mês</span>
            </p>
            <ul style={{
              fontSize: '15px',
              lineHeight: '1.8',
              marginBottom: '24px',
              textAlign: 'left',
              paddingLeft: '20px'
            }}>
              <li>Consultas ilimitadas</li>
              <li>Acesso total ao painel normativo</li>
              <li>Uso por até 3 dispositivos com token individual</li>
              <li>Suporte técnico prioritário</li>
            </ul>
            <button style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#3a2f27',
              color: '#E3D5C3',
              fontWeight: 600,
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 0 6px rgba(227,213,195,0.2), 0 0 10px rgba(227,213,195,0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#4a3a2f';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(227,213,195,0.4), 0 0 20px rgba(227,213,195,0.2)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#3a2f27';
                e.currentTarget.style.boxShadow = '0 0 6px rgba(227,213,195,0.2), 0 0 10px rgba(227,213,195,0.1)';
              }}>
              Contratar plano ilimitado
            </button>
          </div>
        </div>

        {/* Rodapé */}
        <p style={{
          marginTop: '40px',
          fontSize: '13px',
          color: '#ccc',
          textAlign: 'center',
        }}>
          Os planos são cobrados mensalmente. O acesso está condicionado ao status do pagamento.
        </p>
      </div>
    </main>
  );
}






