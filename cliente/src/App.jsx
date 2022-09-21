import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProdutoForm from './pages/ProdutoForm';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Contato from './pages/Contato';
import NaoEncontrada from './pages/NaoEncontrada';
import { ProdutosProvider } from './context/ProdutosProvider';
import FormProdutos from './pages/FormProdutos';
import Tienda from './pages/Tienda';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/novo-produto' element={<ProdutoForm />} />
        <Route path='/editar-produto/:id' element={<ProdutoForm />} />
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
