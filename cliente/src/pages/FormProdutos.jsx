import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useProdutos } from '../context/ProdutosProvider';
import { useNavigate, useParams } from 'react-router-dom';
import '../pages/syles/FormProdutos.css';

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
          valor: res.valor,
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
            navigate('/produtos' + params.id);
          } else {
            await createProduct(values);
          }
          actions.setSubmitting(false);
          navigate('/tienda');
        }}
        enableReinitialize
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className='form_container'>
              <div className='image_input'>
                <h3>Arraste uma imagem ou </h3>
                <label htmlFor='image'>Clique para carregar</label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={(e) => setFieldValue('image', e.target.files[0])}
                />
              </div>
              <div className='input_fields'>
                <h2> {params.id ? 'Editar Produto' : 'Cadastrar Produto'} </h2>
                <Field
                  className='input_form'
                  name='titulo'
                  placeholder='Nome do Produto'
                />
                <Field
                  className='input_form'
                  name='categoria'
                  placeholder='Categoria'
                />
                <Field
                  className='input_form'
                  name='categoriaProduto'
                  placeholder='Categoria de Produto'
                />
                <Field
                  className='input_form'
                  name='descripcao'
                  placeholder='Descripcao'
                  component={'textarea'}
                />
                <Field
                  className='input_form'
                  type='number'
                  name='valor'
                  placeholder='Valor'
                />
                <button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Carregando...' : 'Cadastrar'}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
