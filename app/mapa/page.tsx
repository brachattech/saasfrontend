'use client';

import React, { useState } from 'react';
import MapLibreView from './maplibreview';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Page() {
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [coordenadas, setCoordenadas] = useState<{ lat: number; lng: number } | null>(null);

  const limparCep = (input: string) => {
    return input.replace(/\D/g, '').slice(0, 8);
  };

  const buscarCep = async () => {
    const cepLimpo = limparCep(cep);
    if (cepLimpo.length !== 8) {
      alert('CEP inválido. Digite os 8 números.');
      return;
    }

    try {
      const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const viaCepData = await viaCepResponse.json();

      if (viaCepData.erro) {
        alert('CEP não encontrado.');
        return;
      }

      setUf(viaCepData.uf);
      setCidade(viaCepData.localidade);

      const enderecoCompleto = `${viaCepData.logradouro}, ${viaCepData.localidade}, ${viaCepData.uf}, Brasil`;
      const geo = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enderecoCompleto)}`);
      const geoData = await geo.json();

      if (geoData.length === 0) {
        alert('Coordenadas não encontradas.');
        return;
      }

      setCoordenadas({ lat: parseFloat(geoData[0].lat), lng: parseFloat(geoData[0].lon) });
    } catch {
  alert('Erro ao buscar CEP.');
}

  };

  const buscarCidadeMunicipio = async () => {
    if (!cidade || !uf) {
      alert('Digite cidade e UF corretamente.');
      return;
    }

    try {
      const q = `${cidade}, ${uf}, Brasil`;
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`);
      const data = await res.json();

      if (data.length === 0) {
        alert('Local não encontrado.');
        return;
      }

      setCoordenadas({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
    } catch {
      alert('Erro ao buscar cidade/UF.');
    }
  };

  const atualizarLocalizacao = (
    novaCoord: { lat: number; lng: number },
    novaUf: string,
    novaCidade: string,
    novoBairro: string
  ) => {
    setCoordenadas(novaCoord);
    setUf(novaUf);
    setCidade(novaCidade);
    setBairro(novoBairro);
  };

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      backgroundImage: 'url("/imagens/fundobtsolo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '16px',
        borderRadius: '12px',
        fontSize: '14px',
        color: '#fff',
      }}>
        <input
          type="text"
          placeholder="Digite um CEP (ex: 70000-000)"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '220px' }}
        />
        <button onClick={buscarCep} style={{ padding: '8px', borderRadius: '6px', fontWeight: 600 }}>Buscar CEP</button>

        <hr style={{ borderColor: '#aaa', width: '100%' }} />

        <input
          type="text"
          placeholder="Cidade (ex: Brasília)"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '220px' }}
        />
        <input
          type="text"
          placeholder="UF (ex: DF)"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '220px' }}
        />
        <button onClick={buscarCidadeMunicipio} style={{ padding: '8px', borderRadius: '6px', fontWeight: 600 }}>Buscar Cidade</button>

        <div style={{ marginTop: '10px' }}>
          <div><strong>UF:</strong> {uf || '—'}</div>
          <div><strong>Cidade:</strong> {cidade || '—'}</div>
          <div><strong>Bairro:</strong> {bairro || '—'}</div>
        </div>
      </div>

      <MapLibreView coordenadasBusca={coordenadas} atualizarLocalizacao={atualizarLocalizacao} />
    </main>
  );
}





