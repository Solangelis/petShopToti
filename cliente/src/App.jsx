import Navbar from './components/Navbar/Navbar'
// import paginadoProduto from './components/paginadoProduto/paginadoProduto'
import ProdutoForm from './pages/ProdutoForm'
import Footer from './components/Footer/Footer'
import './App.css'




function App() {

  return (
    <div className='App'>
      <Navbar />
      <h1>Seja Benvido a Nossa App</h1>
      <h2>A nossa página se encontra em Construcao</h2>
      <ProdutoForm />
      <Footer />
    </div>
  );
}

export default App;
