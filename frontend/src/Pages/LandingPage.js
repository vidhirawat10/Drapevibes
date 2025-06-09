import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>DrapeVibes</h1>
        <nav>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Transform Your Space with DrapeVibes</h2>
        <p style={styles.heroSubtitle}>Elegant, quality drapes tailored for your vibe.</p>
        <button style={styles.ctaButton}>Shop Now</button>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <h3>Why Choose DrapeVibes?</h3>
        <ul>
          <li>Premium Quality Fabrics</li>
          <li>Custom Sizes and Designs</li>
          <li>Fast & Reliable Delivery</li>
          <li>Affordable Prices</li>
        </ul>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <p>Contact us: info@drapevibes.com | Follow us on social media</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#4B0082',
  },
  navLink: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#4B0082',
    fontWeight: '600',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '25px',
    color: '#555',
  },
  ctaButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#4B0082',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  features: {
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '8px',
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
  },
};

export default LandingPage;
