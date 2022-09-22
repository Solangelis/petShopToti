import { createContext, useContext, useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import {
  obterReqProdutos,
  criarReqProdutos,
  deleteReqProdutos,
  obterReqProduto,
  updateReqProdutos,
} from '../api/produtos.api';
import Navbar from '../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const produtosContext = createContext();
export const useProdutos = () => {
  const contexto = useContext(produtosContext);
  return contexto;
};

export const ProdutosProvider = ({ children }) => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState([]);

  const getProducts = async () => {
    const res = await obterReqProdutos();
    setProdutos(res.data);
    setSearch(res.data);
  };

  const createProduct = async (produto) => {
    const res = await criarReqProdutos(produto);
    setProdutos([...produtos, res.data]);
  };

  const deleteProduct = async (id) => {
    await deleteReqProdutos(id);
    setProdutos(produtos.filter((produto) => produto._id !== id));
    navigate('/');
  };

  const getProduct = async (id) => {
    try {
      const res = await obterReqProduto(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, produto) => {
    try {
      const res = await updateReqProdutos(id, produto);
      setProdutos(
        produtos.map((produto) => (produto._id === id ? res.data : produto))
      );
    } catch (error) {
      console.error({ Message: error });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChangeResult = (e) => {
    if (!e.target.value) return setSearch(produtos);

    const searchResult = produtos.filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(e.target.value) ||
        produto.descripcao.toLowerCase().includes(e.target.value)
    );
    setSearch(searchResult);
  };

  return (
    <produtosContext.Provider
      value={{
        produtos,
        setProdutos,
        createProduct,
        deleteProduct,
        getProducts,
        getProduct,
        updateProduct,
        handleChangeResult,
        search,
        setSearch,
      }}
    >
      <header>
        <Navbar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </produtosContext.Provider>
  );
};
