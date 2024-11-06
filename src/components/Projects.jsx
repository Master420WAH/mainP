import React, { useState } from 'react';
import ImageModal from './ImageModal';
import mainCat from '/public/images/main.png';
import shepp from '/public/images/shepp.png';
import game from '/public/images/game.png';
import vei from '/public/images/vei.png';
import phase1 from '/public/images/phase1.png';
import phase2 from '/public/images/phase2.png';


const Projects = () => {
  const images = [mainCat, phase1, phase2, vei];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div style={styles.sliderContainer}>
        <button onClick={prevImage} style={styles.button}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt="Project Slide"
          style={styles.mainImage}
          onClick={() => openModal(images[currentImageIndex])}
        />
        <button onClick={nextImage} style={styles.button}>Next</button>
      </div>
      <ul>
        <li>
          <h3>Phase 1</h3>
          <p>Sus art 1. her kan du se min kunst </p>
          <img
            src={phase1}
            alt="sus"
            style={art.logo}
            onClick={() => openModal(phase1)}
          />
        </li>
        <li>
          <h3>Phase 2</h3>
          <p>sus art 2. her kan du se min kunst part 2</p>
          <img
            src={phase2}
            alt="sus"
            style={art.logo}
            onClick={() => openModal(phase2)}
          />
        </li>
        <li>
          <h3>Phase 3</h3>
          <p>sus art 3. her kan du se min kunst part 3</p>
          <img
            src={vei}
            alt="sus"
            style={art.logo}
            onClick={() => openModal(vei)}
          />
        </li>
      </ul>
      {/* Image Modal component */}
      <ImageModal isOpen={isModalOpen} imgSrc={selectedImage} onClose={closeModal} />
    </section>
  );
};

const styles = {
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  },
  mainImage: {
    height: '200px',
    cursor: 'pointer',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

const art = {
  logo: {
    height: '100px',
    cursor: 'pointer',
  },
};

export default Projects;

