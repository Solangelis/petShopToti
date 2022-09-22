import imagepet from  '../images/imagepet.png';
import cate from '../images/cate.png';
import './CardHome'


export function CardHome() {
    return(
    <div>
        <h2>A melhor ração, para sua melhor companhia! ...</h2>
        <p>Compartilhe fotos e vídeos de bichinhos antes e depois de passarem pelo banho e tosa do seu estabelecimento</p>
        <div className="pet-cachorro">
            <img src={imagepet} alt='imagepet' />
            <img src={cate} alt='cate'/>
        </div>
    </div>
    
    )
}
export default CardHome;

