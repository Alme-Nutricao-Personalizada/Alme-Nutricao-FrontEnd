import './QuemSomos.css';
import imgQuemSomos from '../../../assets/imgsDesktop/imgDesktopComputador.jpg';
import Titulo from '../../../components/Titulo/Titulo';

function QuemSomos (){
    return(
        <div className='container-quem-somos'>
            <Titulo titulo="Nutrição com propósito" />
            <p  className='texto-quem-somos'>Uma metodologia criada há mais de 10 anos, que une nutrição, 
            praticidade e o sabor que você nunca imaginou que uma alimentação saudável poderia ter!</p>
            <img src={imgQuemSomos} alt="Imagem de uma pessoa comendo uma salada" className='img-quem-somos'/>       
        </div>
    );
}

export default QuemSomos;