import { api } from './index.axios';

export const obterReqProdutos = async () => await api.get('/produtos');

export const criarReqProdutos = async (produto) => await api.post('/produtos', produto);

export const deleteReqProdutos = async (id) => await api.delete('/produtos/' + id)