'use client';

import React from 'react';

export default function FundoBRACHAT() {
  const planos = [
    {
      nome: 'Plano Essencial',
      preco: 'R$ 197,00',
      beneficios: [
        '30 consultas normativas por mês',
        'Token para dispositivo único',
        'Sem notificações de atualização de normas consultadas'
      ]
    },
    {
      nome: 'Plano Profissional',
      preco: 'R$ 590,00',
      beneficios: [
        'Consultas ilimitadas',
        'Uso por múltiplos dispositivos com token',
        'Notificação de atualizações de normas consultadas'
      ]
    }
  ];

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: '60px 20px',
      backgroundImage: 'url("/imagens/fundoplanobturbanismo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
    }}>
      <h1 style={{
        fontSize: '32px',
        color: '#E3D5C3',
        marginBottom: '20px',
        textAlign: 'center',
        gap: '5 px'
      }}>
        Planos de Acesso ao Mapa Normativo – BTUrbanismo
      </h1>

      <div style={{
        display: 'flex',
        gap: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {planos.map((plano, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '32px',
            width: '300px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#fff' }}>{plano.nome}</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
              {plano.preco}<span style={{ fontSize: '16px' }}>/mês</span>
            </p>
            <ul style={{
              fontSize: '15px',
              lineHeight: '1.8',
              textAlign: 'left',
              paddingLeft: '20px',
              marginBottom: '24px',
            }}>
              {plano.beneficios.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
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
              transition: '0.3s',
              boxShadow: '0 0 6px rgba(227,213,195,0.4), 0 0 10px rgba(227,213,195,0.2)'
            }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#d4c2aa';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#E3D5C3';
              }}
            >
              Contratar {plano.nome.toLowerCase()}
            </button>
          </div>
        ))}
      </div>

      <p style={{
        marginTop: '40px',
        fontSize: '13px',
        color: '#ccc',
        textAlign: 'center'
      }}>
        O acesso está condicionado ao status do pagamento. Planos renovados automaticamente mês a mês.
      </p>
    </main>
  );
}





