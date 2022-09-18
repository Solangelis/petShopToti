import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProdutoForm from './pages/ProdutoForm';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Contato from './pages/Contato';
import NaoEncontrada from './pages/NaoEncontrada';
import Footer from './components/Footer/Footer';
import { ProdutosProvider } from './context/ProdutosProvider';
import FormProdutos from './pages/FormProdutos';

function App() {
  return (
    <ProdutosProvider>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar-produto' element={<FormProdutos />} />
        {/* <Route path='/novo-produto' element={<ProdutoForm />} />
        <Route path='/editar-produto/:id' element={<ProdutoForm />} /> */}
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </ProdutosProvider>
  );
}
export default App;
