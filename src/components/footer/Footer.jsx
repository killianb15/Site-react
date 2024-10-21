// src/components/footer/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importer les icônes GitHub et LinkedIn
import './footer.css'; // Importer le CSS pour le footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>Voici mes réseaux :</p>
            <a href="https://github.com/killianb15" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social-icon" /> {/* Utiliser l'icône GitHub */}
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="social-icon" /> {/* Utiliser l'icône LinkedIn */}
            </a>
        </footer>
    );
};

export default Footer;
