'use client';

import React from "react";

export default function SobrePage() {
  return (
    <main
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url("/imagens/fundosobre.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
          color: '#E3D5C3',
          padding: '1rem 2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: '1.15rem',
          lineHeight: '1.2',
          textAlign: 'justify',
        }}
      >
    

        <p>
          Na <strong>BRACHAT</strong>, acreditamos que tecnologia e inteligência normativa devem servir ao interesse coletivo — não apenas ao crescimento privado.
          Nosso compromisso com a responsabilidade social está presente na essência do que construímos: um sistema que democratiza o acesso à informação jurídica,
          reduz desigualdades regulatórias e fortalece decisões baseadas em dados, não em privilégios.
        </p>

        <p>
          Em um país onde grande parte dos municípios carece de organização legislativa básica, onde normas importantes se perdem em sites desatualizados
          e onde o custo da insegurança jurídica afasta investimentos e agrava desigualdades regionais, a BRACHAT atua como infraestrutura técnica de inclusão regulatória.
        </p>

        <h3 style={{ marginTop: '1rem' }}>Nossos pilares de impacto social:</h3>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc' }}>
          <li>
            <strong>Redução da assimetria jurídica:</strong> ao mapear normas municipais, estaduais e federais com clareza e contexto, empoderamos pequenas empresas,
            profissionais autônomos e prefeituras com as mesmas ferramentas antes restritas a grandes corporações.
          </li>
          <li>
            <strong>Transparência regulatória territorial:</strong> contribuímos para que cidadãos, gestores públicos e investidores compreendam de forma acessível
            as regras que moldam o território, fomentando urbanismo sustentável, uso legal do solo e crescimento ordenado.
          </li>
          <li>
            <strong>Apoio a municípios desorganizados:</strong> oferecemos soluções específicas para ajudar prefeituras e câmaras a organizarem e digitalizarem
            sua legislação, melhorando a governança local e a eficiência administrativa.
          </li>
          <li>
            <strong>Ética no uso de IA:</strong> utilizamos inteligência artificial com responsabilidade, respeitando os limites técnicos e legais,
            com cláusulas claras de não substituição jurídica e compromisso com a veracidade das informações entregues.
          </li>
          <li>
            <strong>Inclusão digital no meio jurídico:</strong> promovemos o acesso a ferramentas avançadas sem barreiras financeiras proibitivas,
            com planos acessíveis e parcerias com instituições educacionais, ONGs e coletivos técnicos.
          </li>
        </ul>

        <p style={{ marginTop: '1rem' }}>
          Nosso propósito vai além da inovação: queremos que o conhecimento normativo seja instrumento de justiça territorial,
          planejamento urbano responsável, desenvolvimento econômico equilibrado e cidadania informada.
        </p>

        <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
          A BRACHAT é tecnologia com consciência pública.
        </p>
      </div>
    </main>
  );
}









