import React, { useState } from 'react';
import warCat from '/public/images/war-cat.jpg';

const About = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const handleImageClick = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Master Wah Cat Man, a web developer passionate about creating beautiful cat websites.
        I have experience in HTML, CSS, JavaScript, and React, and I'm always eager to learn more and take on new cat challenges.
      </p>
      <div>
        <h2>Warrior Cat</h2>
        <img
          src={warCat}
          style={styles.logo}
          alt="Warrior Cat in battlefield"
          onClick={handleImageClick}
          className={isSpinning ? 'spinning' : ''}
        />
      </div>
    </section>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
  },
  logo: {
    height: '300px',
    marginRight: '100px',
    transition: 'transform 1s', // Optional: smooth transition
  },
};

export default About;

