import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useProdutos } from '../context/ProdutosProvider';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormProdutos() {
  const { createProduct, getProduct, updateProduct } = useProdutos();
  const navigate = useNavigate();
  const params = useParams();
  const [produto, setProduto] = useState({
    titulo: '',
    categoria: '',
    categoriaProduto: '',
    descripcao: '',
    valor: '',
    image: null,
  });

  useEffect(() => {
    if (params.id) {
      (async () => {
        const res = await getProduct(params.id);
        setProduto({
          titulo: res.titulo,
          categoria: res.categoria,
          categoriaProduto: res.categoriaProduto,
          descripcao: res.descripcao,
          valor: res.valor
        });
      })();
    }
  }, [params.id, getProduct]);

  return (
    <>
      <Formik
        initialValues={produto}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateProduct(params.id, values);
            navigate('/produtos' + params.id)
          } else {
            await createProduct(values);
          }
          actions.setSubmitting(false);
          navigate('/');
        }}
        enableReinitialize
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field name='titulo' placeholder='Nome do Produto' />
            <Field name='categoria' placeholder='Categoria' />
            <Field name='categoriaProduto' placeholder='Categoria de Produto' />
            <Field name='descripcao' placeholder='Descripcao' />
            <Field type='number' name='valor' placeholder='Valor' />
            <div className='image_imput'>
              <input
                type='file'
                name='image'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              />
            </div>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Carregando...' : 'Cadastrar'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
