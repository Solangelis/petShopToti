import { Formik, Form, Field } from 'formik';
import { useProdutos } from '../context/ProdutosProvider';
import { useNavigate } from 'react-router-dom';

export default function FormProdutos() {
  const { createProduct } = useProdutos();
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          titulo: '',
          categoria: '',
          categoriaProduto: '',
          descripcao: '',
          valor: '',
        }}
        
        onSubmit={async (values, actions) => {
          
          await createProduct(values);
          navigate('/');
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name='titulo' placeholder='Nome do Produto' />
            <Field name='categoria' placeholder='Categoria' />
            <Field name='categoriaProduto' placeholder='Categoria de Produto' />
            <Field name='descripcao' placeholder='Descripcao' />
            <Field type='number' name='valor' placeholder='Valor' />
            <button type='submit'>Cadastrar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
