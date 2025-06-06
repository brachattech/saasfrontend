'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Fundo com imagem */}
      <Image
        src="/fundohome.png"
        alt="Fundo BRACHAT"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />

      {/* Overlay escuro */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1
      }} />

      {/* Bloco institucional central */}
      <div style={{
        position: 'relative',
        top: '25%',
        textAlign: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0px 0px 0px 20px',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#E3D5C3',
          top: '10%',
          marginBottom: '30px',
          textShadow: '0 2px 4px rgba(0,0,0,0.6)',
          lineHeight: '1'
        }}>
          O Brasil tem muitas leis espalhadas. <br />
          Nós reunimos e entregamos o que importa pra você.
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#ccc',
          lineHeight: '1.6',
          marginBottom: '50px'
        }}>
          Encontre o que precisa por meio de geolocalização. <br />
          Funciona assim: Você clica no mapa e nós encontramos as normas, jurisprudências e projetos de lei que você precisa. <br />
          A experiência normativa mais clara, protegida e inteligente do país.
        </p>

        <Link href="/cards">
          <button
            style={{
              padding: '20px 32px',
              backgroundColor: '#E3D5C3',
              color: '#1e1e1e',
              fontWeight: '700',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 0 8px rgba(227,213,195,0.4), 0 0 16px rgba(227,213,195,0.2)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d2c2ae';
              e.currentTarget.style.boxShadow = '0 0 12px rgba(227,213,195,0.6), 0 0 24px rgba(227,213,195,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E3D5C3';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(227,213,195,0.4), 0 0 16px rgba(227,213,195,0.2)';
            }}
          >
            Conheça nossos módulos
          </button>
        </Link>
      </div>

      {/* ✅ Injeção de estilo global para remover margem e scroll */}
   

    </main>
  );
}








