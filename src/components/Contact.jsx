import React from 'react';
import cryCat from '/public/images/crying-cat.jpg';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <img src={cryCat} style={styles.logo} alt="Warrior Cat in battlefield" />
      <p>You can reach me at <a href="mailto:youremail@example.com">Master420@gmail.com</a>.</p>
      <p>Follow me on <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my work on <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </section>
  );
};

const styles = {
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '100px',
      marginRight: '10px',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0,
    },
  };

export default Contact;
