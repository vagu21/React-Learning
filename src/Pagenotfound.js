import React from 'react';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
    },
    content: {
      maxWidth: '600px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '6rem',
      marginBottom: '20px',
      color: '#343a40',
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#6c757d',
    },
    image: {
      width: '100%',
      maxWidth: '300px',
      marginBottom: '20px',
    },
    link: {
      textDecoration: 'none',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
        <img
          src="https://example.com/your-image.png"
          alt="Page not found illustration"
          style={styles.image}
        />
        <Link to="/" style={styles.link}>
          <button
            style={styles.button}
            onMouseEnter={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={e => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pagenotfound;
