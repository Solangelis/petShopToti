import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProdutoForm from './pages/ProdutoForm';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Footer from './components/Footer/Footer';
import './App.css';
import Card from './components/layout/Card';

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
      </Routes>
      
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
export default App;
