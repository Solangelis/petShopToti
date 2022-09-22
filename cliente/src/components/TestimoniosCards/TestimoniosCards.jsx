import imagepet from '../images/imagepet.png';
import cate from '../images/cate.png';
import '../TestimoniosCards/TestimoniosCards.css';

const TestimoniosCards = ({
  image,
  titulo,
  testimonio,
  author,
  descripcao,
}) => {
  return (
    <>
      <article className='testi__cards-container'>
        <div className='testi__cards-img'>
          <img
            src={`../../../public/img/pet-image-bg${image}.png`}
            alt='imagepet'
          />
        </div>
        <div className='testi__info'>
          <div className='testi__text-info'>
            <h3> {titulo} </h3>
            <p> {testimonio} </p>
          </div>
          <div className='testi__author'>
            <h5>{author}</h5>
            <span> {descripcao} </span>
          </div>
        </div>

        <div className='testi_img-decor'>
          <img src={cate} alt='cate' />
        </div>
      </article>
    </>
  );
};
export default TestimoniosCards;
