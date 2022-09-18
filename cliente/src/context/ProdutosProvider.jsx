import { createContext, useContext, useState, useEffect } from 'react';
import {
  obterReqProdutos,
  criarReqProdutos,
  deleteReqProdutos,
} from '../api/produtos.api';
import { useNavigate } from 'react-router-dom';

const produtosContext = createContext();
export const useProdutos = () => {
  const contexto = useContext(produtosContext);
  return contexto;
};


export const ProdutosProvider = ({ children }) => {

  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  const getProducts = async () => {
    const res = await obterReqProdutos();
    setProdutos(res.data);
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <produtosContext.Provider
      value={{
        produtos,
        createProduct,
        deleteProduct,
      }}
    >
      {children}
    </produtosContext.Provider>
  );
};
