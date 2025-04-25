// src/app.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';  
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}
console.log("App loaded");
<div className="bg-red-500 text-white p-4">Tailwind Test</div>


export default App;
