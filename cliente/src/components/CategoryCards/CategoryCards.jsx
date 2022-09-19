import '../CategoryCards/CategoryCards.css';
import { useProdutos } from '../../context/ProdutosProvider'

export default function CategoryCards({image, categoria}) {
  const { produtos } = useProdutos()
  return (
    <>
      <div className='category_wrapper'>
        <div className='category_cards'>
          <img src={`../../public/img/category-pet${image}.jpg`} alt='dog' />
          <h3>{categoria}</h3>
        </div>
      </div>
    </>
  );
}
