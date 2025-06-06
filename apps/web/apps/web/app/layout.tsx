'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const linkStyle: React.CSSProperties = {
  color: "#E3D5C3",
  fontSize: "20px",
  fontWeight: "500",
  textDecoration: "none",
  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" style={{ height: '100%', overflow: 'hidden' }}>
      <body style={{ margin: 0, height: '100%', overflow: 'hidden' }}>

        {/* Cabeçalho */}
        <div style={{
          position: "absolute",
          top: "-100px",
          left: "-40px",
          right: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20
        }}>
          <Image
            src="/logo.png"
            alt="Logo BRACHAT"
            width={400}
            height={300}
            style={{ objectFit: "contain" }}
          />

          <div style={{ display: "flex", gap: "60px" }}>
            <Link href="/cards" style={linkStyle}>Áreas de atuação</Link>
            <a href="#sobre" style={linkStyle}>Sobre Nós</a>
            <a href="#responsabilidade" style={linkStyle}>Responsabilidade Social</a>
            <a href="#noticias" style={linkStyle}>Notícias</a>
            <a href="#contato" style={linkStyle}>Contato</a>
          </div>
        </div>

        {/* Linha abaixo do cabeçalho */}
        <div style={{
          position: 'absolute',
          top: '100px', // Linha mais próxima do topo
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          zIndex: 19
        }} />

        {/* Conteúdo */}
        {children}

        {/* Rodapé */}
        <footer style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          padding: '0 60px',
          backgroundColor: '#1e1e1e',
          color: '#E3D5C3',
          zIndex: 99
        }}>
          <p>&copy; 2025 BrachaT. Todos os direitos reservados.</p>
          <Link href="/cards" style={{ color: '#E3D5C3', textDecoration: 'none' }}>
            Voltar para módulos
          </Link>
        </footer>

      </body>
    </html>
  );
}












