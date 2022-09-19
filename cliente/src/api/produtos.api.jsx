import { api } from './index.axios';

export const obterReqProdutos = async () => await api.get('/produtos');

export const criarReqProdutos = async (produto) => {
  const formData = new FormData();
  for(let key in produto){
    formData.append(key, produto[key])
  }

   return await api.post('/produtos', formData,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  });
} 

export const updateReqProdutos = async (id, newProdutos) => {
  const formData = new FormData();
  for (let key in newProdutos) {
    formData.append(key, newProdutos[key]);
  }
  return await api.put('/produtos/' + id, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}; 

export const obterReqProduto = async(id) => await api.get('/produtos/' + id)

export const deleteReqProdutos = async (id) => await api.delete('/produtos/' + id)