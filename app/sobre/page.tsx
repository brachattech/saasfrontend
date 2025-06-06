'use client';

import React from "react";

export default function SobrePage() {
  return (
   <main
  style={{
    position: 'fixed', // ← fixo na tela inteira
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh', // ← garante 100% da altura visível
    backgroundImage: 'url("/imagens/fundosobre.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    zIndex: 0,
  }}
>
      {/* Camada escura translúcida sobre o fundo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      />

      {/* Conteúdo visível */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '20px',
          color: '#E3D5C3',
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          lineHeight: 1.7,
          maxWidth: '1100x',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '90%',
          textAlign: 'justify',
        }}
      >
        <p>
          A BRACHAT nasceu para resolver um problema crônico: o caos normativo que afeta decisões estratégicas em todo o Brasil.
          Nossa missão é transformar a complexidade jurídica em inteligência clara, rápida e focada no território.
        </p>

        <p>
          Somos uma LegalTech especializada na interpretação prática de normas públicas.
          Utilizamos inteligência artificial e georreferenciamento para entregar, em segundos, o que realmente importa para cada ponto no mapa — sem ruído, sem juridiquês.
        </p>

        <p>
          Não vendemos acesso a leis. Entregamos contexto normativo aplicável.
          Cada norma vira ação: um checklist, um risco evitado, uma decisão orientada.
        </p>

        <p>
          Atendemos arquitetos, empresas, consultores e gestores que precisam entender onde podem construir, investir ou operar.
          Nosso diferencial está em três pilares: geolocalização jurídica, interpretação automatizada e atualização contínua por município e setor.
        </p>

        <p>
          A BRACHAT não substitui o advogado — ela potencializa. Não compete com consultorias — dá velocidade.
          E não reinventa o Direito — organiza o que já existe, com precisão técnica e propósito público.
        </p>

        <p style={{ fontWeight: 'bold' }}>
          BRACHAT — Inteligência normativa aplicada ao território.
        </p>
      </div>
    </main>
  );
}

