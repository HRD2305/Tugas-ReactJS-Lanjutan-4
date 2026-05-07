const Unauthorized = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff1f2' 
  }}>
    <h1 style={{ fontSize: '72px', margin: 0, color: '#be123c' }}>403</h1>
    <h2 style={{ color: '#9f1239' }}>Akses Terlarang!</h2>
    <p style={{ color: '#fb7185', maxWidth: '300px', textAlign: 'center' }}>
      Maaf, Anda tidak memiliki izin administrator untuk mengakses halaman ini.
    </p>
    <button 
      onClick={() => window.location.href = '/'}
      style={{ 
        marginTop: '20px', 
        padding: '10px 20px', 
        backgroundColor: '#be123c', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Kembali ke Beranda
    </button>
  </div>
);

export default Unauthorized;