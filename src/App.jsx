// src/App.jsx
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css'; // Importer le fichier CSS pour App

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;
