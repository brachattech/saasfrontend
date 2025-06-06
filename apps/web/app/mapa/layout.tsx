import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      {children}
    </div>
  );
}














