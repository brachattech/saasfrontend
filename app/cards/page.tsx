'use client';

import React from 'react';
import Link from 'next/link';

const areas = [
  'Urbanismo', 'Licitações', 'LGPD', 'Saúde',
  'Insolvência', 'Educação', 'Ambiental', 'Tributário',
  'Infraestrutura', 'Aduaneiro', 'Energia', 'Petróleo',
  'ESG', 'Agro', 'Seguros', 'Marítimo',
  'Planodesaude', 'Saneamento', 'Mineração'
];

export default function AreasPage() {
  return (
    <main
      style={{
        backgroundImage: 'url(/imagens/fundocard.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        padding: '80px 20px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 140px)', // atualizado para 6 colunas
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {areas.map((area, i) => {
          let imageUrl = `/areas/${area.toLowerCase()}.jpg`;

          const customImages: Record<string, string> = {
            Urbanismo: '/imagens/fundocardurbanismo.png',
            Licitações: '/imagens/fundocardlicitacoes.png',
            LGPD: '/imagens/fundocardlgpd.png',
            Saúde: '/imagens/fundocardsaude.png',
            Insolvência: '/imagens/fundocardinsolvencia.png',
            Educação: '/imagens/fundocardeducacao.png',
            Ambiental: '/imagens/fundocardmeioambiente.png',
            Tributário: '/imagens/fundocardtributario.png',
            Infraestrutura: '/imagens/fundocardinfraestrutura.png',
            Aduaneiro: '/imagens/fundocardaduaneiro.png',
            Energia: '/imagens/fundocardenergia.png',
            Petróleo: '/imagens/fundocardpetroleo.png',
            ESG: '/imagens/fundocardesg.png',
            Agro: '/imagens/fundocardagro.png',
            Seguros: '/imagens/fundocardseguros.png',
            Marítimo: '/imagens/fundocardmaritimo.png',
            Planodesaude: '/imagens/fundocardplanodesaude.png',
            Saneamento: '/imagens/fundocardsaneamento.png',
            Mineração: '/imagens/fundocardmineracao.png'
          };

          if (customImages[area]) {
            imageUrl = customImages[area];
          }

          return (
            <Link key={i} href={`/produtos/${area.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                width: '150px',
                height: '120px',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease',
                backgroundColor: '#2b2b2b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
            >
              <div
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  opacity: 0.9,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 0
                }}
              />
              <span style={{
                position: 'relative',
                zIndex: 1,
                color: '#E3D5C3',
                fontWeight: '700',
                fontSize: '15px',
                textAlign: 'center',
                padding: '8px'
              }}>
                {area}
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}












