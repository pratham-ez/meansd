import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Breakup from './components/Breakup';
import NoBreakup from './components/NoBreakup';
import Baat from './components/Baat';
import Suno from './components/Suno';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/breakup"} element={<Breakup />} />
        <Route path={"/nobreakup"} element={<NoBreakup />} />
        <Route path={"/baat"} element={<Baat />} />
        <Route path={"/suno"} element={<Suno />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
