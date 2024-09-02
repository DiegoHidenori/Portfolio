import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;