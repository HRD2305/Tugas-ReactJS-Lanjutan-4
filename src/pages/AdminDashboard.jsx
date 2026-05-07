import { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{...dsStyles.layout, flexDirection: isMobile ? 'column' : 'row'}}>
      <div style={{
        ...dsStyles.sidebar, 
        width: isMobile ? '100%' : '240px',
        height: isMobile ? 'auto' : '100vh',
        boxSizing: 'border-box'
      }}>
        <h3 style={{ color: 'white', margin: 0 }}>Admin Panel</h3>
        <nav style={{...dsStyles.nav, flexDirection: isMobile ? 'row' : 'column'}}>
          <div style={dsStyles.navItem}>📊 Dashboard</div>
          <div style={dsStyles.navItem}>👥 User</div>
        </nav>
      </div>

      <div style={dsStyles.main}>
        <header style={dsStyles.header}>
          <h2>Admin Dashboard</h2>
          <button onClick={() => {localStorage.clear(); window.location.href='/login'}} style={dsStyles.logoutBtn}>
            Keluar
          </button>
        </header>
        <div style={{...dsStyles.grid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'}}>
          <div style={dsStyles.statCard}>Statistik Sistem</div>
          <div style={dsStyles.statCard}>Laporan Pengguna</div>
          <div style={dsStyles.statCard}>Log Keamanan</div>
        </div>
      </div>
    </div>
  );
};

const dsStyles = {
  layout: { display: 'flex', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif' },
  sidebar: { backgroundColor: '#1e293b', padding: '20px' },
  nav: { marginTop: '20px', display: 'flex', gap: '15px' },
  navItem: { color: '#94a3b8', cursor: 'pointer' },
  main: { flex: 1, backgroundColor: '#f8fafc', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  grid: { display: 'grid', gap: '20px', marginTop: '20px' },
  statCard: { backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  logoutBtn: { padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }
};

export default AdminDashboard;