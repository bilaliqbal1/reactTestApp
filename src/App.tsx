import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route  } from 'react-router-dom'
import GetPost from './pages/GetPost';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetPost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
