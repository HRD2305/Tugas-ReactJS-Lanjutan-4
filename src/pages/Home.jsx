import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  return (
    <div style={styles.wrapper}>
      {/* Navbar Responsif */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>MyApps</div>
        <div style={styles.navLinks}>
          {role === 'admin' && (
            <button onClick={() => navigate('/admin')} style={styles.adminBtn}>Admin</button>
          )}
          <button onClick={() => {localStorage.clear(); navigate('/login')}} style={styles.logoutBtn}>Keluar</button>
        </div>
      </nav>

      <header style={styles.hero}>
        <h1 style={styles.title}>Selamat Datang!</h1>
        <p style={styles.subtitle}>Akses Anda sebagai: <b>{role}</b></p>
      </header>

      <main style={styles.content}>
        {/* Konten otomatis menyusun sendiri karena grid minmax */}
        <div style={styles.card}><h3>Info 1</h3><p>Konten A</p></div>
        <div style={styles.card}><h3>Info 2</h3><p>Konten B</p></div>
      </main>
    </div>
  );
};

const styles = {
  wrapper: { minHeight: '100vh', backgroundColor: '#f8fafc' },
  navbar: { 
    display: 'flex', 
    flexWrap: 'wrap', // Membungkus konten jika layar terlalu sempit
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '10px 5%', 
    backgroundColor: '#fff',
    gap: '10px'
  },
  logo: { fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' },
  navLinks: { display: 'flex', gap: '10px' },
  adminBtn: { padding: '6px 12px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px' },
  logoutBtn: { padding: '6px 12px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '4px' },
  hero: { textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff' },
  title: { fontSize: 'clamp(24px, 5vw, 32px)', margin: '0' },
  subtitle: { color: '#64748b' },
  content: { 
    display: 'grid', 
    // Otomatis menentukan jumlah kolom berdasarkan lebar layar (minimal 280px per kartu)
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px', 
    padding: '20px 5%' 
  },
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
};

export default Home;