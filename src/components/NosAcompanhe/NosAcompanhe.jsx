import './NosAcompanhe.css';
import imgNosAcompanhe1 from '../../assets/imgsDesktop/imgDesktopNosAcompanhe1.webp';
import imgNosAcompanhe2 from '../../assets/imgsDesktop/imgDesktopNosAcompanhe2.webp';
import imgNosAcompanhe3 from '../../assets/imgsDesktop/imgDesktopNosAcompanhe3.webp';
import Titulo from '../Titulo/Titulo';

function NosAcompanhe() {
    return (
        <div className='container-nos-acompanhe'>
            <Titulo titulo="NOS ACOMPANHE NO INSTAGRAM"/>
            <div className='container-imgs-nos-acompanhe'>
                <img src={imgNosAcompanhe1} alt="Nos Acompanhe 1" className='img-nos-acompanhe' />
                <img src={imgNosAcompanhe2} alt="Nos Acompanhe 2" className='img-nos-acompanhe' />
                <img src={imgNosAcompanhe3} alt="Nos Acompanhe 3" className='img-nos-acompanhe' />
                <img src={imgNosAcompanhe1} alt="Nos Acompanhe 4" className='img-nos-acompanhe' />
                <img src={imgNosAcompanhe2} alt="Nos Acompanhe 5" className='img-nos-acompanhe' />
                <img src={imgNosAcompanhe3} alt="Nos Acompanhe 6" className='img-nos-acompanhe' />
            </div>
        </div>
    )
}

export default NosAcompanhe;