'use client';

import React from 'react';
import Link from 'next/link';

export default function BTSoloPage() {

  return (
    <main
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
        backgroundImage: "url('/imagens/fundobtsolo.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#E3D5C3',
        fontFamily: 'Georgia, serif',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Overlay visual */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 30%, rgba(143,132,114,0.25), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Conteúdo Central */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 60px',
        zIndex: 1
      }}>
        <div style={{
          width: '50%',
          paddingRight: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'justify'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'center',
            width: '100%'
          }}>
            BTUrbanismo
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '24px',
            textAlign: 'justify'
          }}>
            Com o BTUrbanismo, você consulta de forma imediata todas as normas que regem o uso e ocupação do solo no Brasil. Ideal para arquitetos, governos e universidades. Visualização por quadra, lote ou endereço. Sem interpretações, direto da fonte.
          </p>

          <ul style={{
            fontSize: '16px',
            lineHeight: '2',
            paddingLeft: '20px',
            alignSelf: 'flex-start'
          }}>
            <li>Visualização geoespacial interativa</li>
            <li>Busca por endereço ou clique no mapa</li>
            <li>Acesso ao conteúdo original da norma</li>
            <li>Sem download, sem print, proteção ativa</li>
          </ul>

          <p style={{
            marginTop: '32px',
            fontSize: '16px',
            color: '#E3D5C3',
            textAlign: 'center',
            fontWeight: 500,
            lineHeight: '1.6'
          }}>
            Pare de fazer tua equipe perder tempo procurando por meio de buscadores não especializados que nada encontram.
            <br />
            <strong>Só nós conseguimos resolver o teu problema.</strong>
          </p>

          <Link href="/pageplanos">
            <button
              style={{
                marginTop: '24px',
                padding: '12px 24px',
                backgroundColor: '#E3D5C3',
                color: '#1e1e1e',
                fontWeight: '600',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 0 8px rgba(227,213,195,0.4), 0 0 16px rgba(227,213,195,0.2)',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#d4c2aa';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(227,213,195,0.6), 0 0 24px rgba(227,213,195,0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#E3D5C3';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(227,213,195,0.4), 0 0 16px rgba(227,213,195,0.2)';
              }}
            >
              Contrate já
            </button>
          </Link>
        </div>

        <div style={{
          width: '45%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)'
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Simulação de uso</h3>
          <p style={{ fontSize: '15px', marginBottom: '20px' }}>
            Clique na região do mapa para visualizar uma norma de exemplo.
          </p>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
          }}>
            <img
              src="/imagens/btmapa-simulacao.png"
              alt="Simulação de uso do BTSolo com popup de norma"
              style={{
                width: '98%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
      </section>

    
    </main>
  );
}




