import '../CategoryCards/CategoryCards.css';

export default function CategoryCards({image, categoria}) {
  return (
    
      <>
        <div className='category_cards'>
          <img src={`../../public/img/category-pet${image}.jpg`} alt='dog' />
          <h3>{categoria}</h3>
        </div>
      </>
    
  );
}
