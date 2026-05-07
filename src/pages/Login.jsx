import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Menyimpan role ke localStorage untuk otorisasi [cite: 12]
    localStorage.setItem('role', role); 
    
    // Navigasi berdasarkan role yang dipilih
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Selamat Datang</h2>
        <p style={styles.subtitle}>Silakan pilih akses masuk Anda</p>
        
        <div style={styles.buttonGroup}>
          <button 
            onClick={() => handleLogin('user')} 
            style={{...styles.button, ...styles.buttonUser}}
          >
            Masuk sebagai User
          </button>
          
          <div style={styles.divider}>atau</div>
          
          <button 
            onClick={() => handleLogin('admin')} 
            style={{...styles.button, ...styles.buttonAdmin}}
          >
            Masuk sebagai Admin
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff',
    padding: 'clamp(20px, 5vw, 40px)',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: { margin: '0 0 10px 0', color: '#1f2937', fontSize: '24px' },
  subtitle: { color: '#6b7280', marginBottom: '30px', fontSize: '14px' },
  buttonGroup: { display: 'flex', flexDirection: 'column', gap: '12px' },
  button: { 
    padding: '12px', 
    borderRadius: '8px', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: '600',
    transition: 'opacity 0.2s' 
  },
  buttonUser: { backgroundColor: '#3b82f6', color: 'white' },
  buttonAdmin: { backgroundColor: '#10b981', color: 'white' },
  divider: { margin: '10px 0', color: '#9ca3af', fontSize: '12px', textTransform: 'uppercase' }
};

export default Login;