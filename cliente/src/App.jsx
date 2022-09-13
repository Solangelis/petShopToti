import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProdutoForm from './pages/ProdutoForm';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Contato from './pages/Contato';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/novo-produto' element={<ProdutoForm />} />
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
