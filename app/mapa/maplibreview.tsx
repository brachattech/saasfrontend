'use client';

import React, { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

type Coordenadas = {
  lat: number;
  lng: number;
} | null;

type Props = {
  coordenadasBusca: Coordenadas;
  atualizarLocalizacao?: (
    coordenadas: { lat: number; lng: number },
    uf: string,
    cidade: string,
    bairro: string
  ) => void;
};

export default function MapLibreView({ coordenadasBusca, atualizarLocalizacao }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [-47.8825, -15.7942], // Brasília
      zoom: 13,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.on('click', async (e) => {
      const { lat, lng } = e.lngLat;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        const uf = data.address?.state || '';
        const cidade =
          data.address?.city ||
          data.address?.town ||
          data.address?.municipality ||
          '';
        const bairro =
          data.address?.suburb ||
          data.address?.neighbourhood ||
          data.address?.village ||
          '';

        if (atualizarLocalizacao) {
          atualizarLocalizacao({ lat, lng }, uf, cidade, bairro);
        }
      } catch (error) {
        console.error('Erro ao buscar endereço via Nominatim:', error);
      }
    });

    mapInstance.current = map;

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (coordenadasBusca && mapInstance.current) {
      mapInstance.current.flyTo({
        center: [coordenadasBusca.lng, coordenadasBusca.lat],
        zoom: 16,
        essential: true,
      });
    }
  }, [coordenadasBusca]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}


