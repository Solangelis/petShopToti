import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Contato from './pages/Contato';
import NaoEncontrada from './pages/NaoEncontrada';
import { ProdutosProvider } from './context/ProdutosProvider';
import FormProdutos from './pages/FormProdutos';
import Tienda from './pages/Tienda';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import React from 'react';

const App = () => {
  return (
    <ProdutosProvider>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar-produto' element={<FormProdutos />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/editar-produto/:id' element={<FormProdutos />} />
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </ProdutosProvider>
  );
};

export default App;
