import { HiOutlineCurrencyDollar, HiOutlineClock } from 'react-icons/hi';
import '../Ours_Services/Ours.css';
function Card({ title, imagenSource, url }) {
  return (
    <div className='card__services'>
      <div className='card__img'>
        <img src='../../public/img/category-pet1.jpg' alt='' />
      </div>
      <div className='service__cards-info'>
        <div className='card__body'>
          <h4>Consultas para filhotes</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            veniam saepe dolorem.
          </p>
        </div>
        <div className='card__button-group'>
          <button>
            <HiOutlineCurrencyDollar className='card__services-icon' />
            R$ 99
          </button>
          <button>
            <HiOutlineClock className='card__services-icon' /> 1 hr
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
