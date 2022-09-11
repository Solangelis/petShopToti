import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProdutoForm from './pages/ProdutoForm'
import PaginaDoProduto from './pages/paginadoProduto'
import Footer from './components/Footer/Footer'
import './App.css'




export default function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='novo-produto' element={<ProdutoForm />} />
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
      </Routes>
      <h1>Seja Benvido a Nossa App</h1>
      <h2>A nossa página se encontra em Construcao</h2>
      <ProdutoForm />
      <Footer />
    </div>
  );
}
