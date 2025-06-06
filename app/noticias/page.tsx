'use client';

import React, { useState } from 'react';

const RAMOS = [
  'BTPlanodesaude', 'BTSaneamento', 'BTMineracao', 'BTLicitacoes', 'BTLGPD',
  'BTSaude', 'BTInsolvencia', 'BTEducacao', 'BTAmbiental', 'BTTributario',
  'BTInfraestrutura', 'BTAduaneiro', 'BTEnergia', 'BTPetroleo', 'BTESG',
  'BTAgro', 'BTSeguros', 'BTMaritimo'
];

const labelMap: Record<string, string> = {
  BTPlanodesaude: 'Plano de Saúde',
  BTSaneamento: 'Saneamento',
  BTMineracao: 'Mineração',
  BTLicitacoes: 'Licitações',
  BTLGPD: 'LGPD',
  BTSaude: 'Saúde',
  BTInsolvencia: 'Insolvência',
  BTEducacao: 'Educação',
  BTAmbiental: 'Ambiental',
  BTTributario: 'Tributário',
  BTInfraestrutura: 'Infraestrutura',
  BTAduaneiro: 'Aduaneiro',
  BTEnergia: 'Energia',
  BTPetroleo: 'Petróleo',
  BTESG: 'ESG',
  BTAgro: 'Agro',
  BTSeguros: 'Seguros',
  BTMaritimo: 'Marítimo',
};

const searchKeywords: Record<string, string> = {
  BTPlanodesaude: 'plano de saude',
  BTSaneamento: 'saneamento basico',
  BTMineracao: 'mineracao brasil',
  BTLicitacoes: 'licitacoes publicas',
  BTLGPD: 'lei geral protecao dados',
  BTSaude: 'sistema de saude',
  BTInsolvencia: 'falencia recuperacao judicial',
  BTEducacao: 'educacao brasil',
  BTAmbiental: 'meio ambiente',
  BTTributario: 'tributacao impostos',
  BTInfraestrutura: 'infraestrutura obras publicas',
  BTAduaneiro: 'comercio exterior',
  BTEnergia: 'energia eletrica petroleo',
  BTPetroleo: 'exploracao petroleo',
  BTESG: 'esg sustentabilidade',
  BTAgro: 'agronegocio brasil',
  BTSeguros: 'seguros brasil',
  BTMaritimo: 'transporte maritimo',
};

type Noticia = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

const GNEWS_API_KEY = '54cd14b0f2f494cc419565677f96a442';

export default function BackgroundWithCards() {
  const [selectedRamo, setSelectedRamo] = useState<string | null>(null);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async (ramo: string) => {
    if (ramo === selectedRamo) return; // evita busca repetida no mesmo ramo
    setSelectedRamo(ramo);
    setLoading(true);
    try {
      const keyword = searchKeywords[ramo] || 'noticias';
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(keyword)}&lang=pt&country=br&max=10&apikey=${GNEWS_API_KEY}`
      );
      const data = await res.json();
      if (data.articles) {
        type Article = {
          title: string;
          description: string;
          url: string;
          image?: string;
        };
        setNoticias(
          data.articles.map((a: Article) => ({
            title: a.title,
            description: a.description,
            url: a.url,
            image: a.image,
          }))
        );
      } else {
        setNoticias([]);
      }
    } catch {
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fundo fixo */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          backgroundImage: 'url("/imagens/fundonoticias.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      />

      {/* Cards */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          padding: '110px 30px',
          fontFamily: 'Georgia, serif',
          color: '#E3D5C3',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(131px, 1fr))',
          gap: '8px 12px',
          alignItems: 'start',
          alignContent: 'start',
        }}
      >
        {RAMOS.map(ramo => (
          <div
            key={ramo}
            onClick={() => handleClick(ramo)}
            style={{
              backgroundColor: selectedRamo === ramo ? 'rgba(201, 178, 157, 0.3)' : 'transparent',
              borderRadius: '5px',
              padding: '8px',
              boxShadow: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '15px',
              fontWeight: '600',
              border: selectedRamo === ramo ? '2px solid #c9b29d' : '2px solid transparent',
              transition: 'background-color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(201, 178, 157, 0.2)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = selectedRamo === ramo ? 'rgba(201, 178, 157, 0.3)' : 'transparent')}
          >
            {labelMap[ramo]}
          </div>
        ))}
      </div>

      {/* Notícias */}
      <section style={{ position: 'relative', zIndex: 1, padding: '0 30px 50px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>
          {selectedRamo ? `Notícias sobre: ${labelMap[selectedRamo]}` : 'Clique em um ramo para ver notícias'}
        </h2>

        {loading ? (
          <p>Carregando notícias...</p>
        ) : noticias.length === 0 ? (
          <p>Clique em algum ramo acima para carregar notícias específicas.</p>
        ) : (
          noticias.map((noticia, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: '#2d2d2d',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '15px',
                boxShadow: '0 3px 8px rgba(0,0,0,0.5)',
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#F3E8DC' }}>{noticia.title}</h3>
              <p style={{ margin: '0 0 10px 0', color: '#ddd' }}>{noticia.description}</p>
              <a
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#c9b29d', textDecoration: 'underline' }}
              >
                Leia mais →
              </a>
            </article>
          ))
        )}
      </section>
    </>
  );
}








