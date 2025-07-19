import './OndeTudoComecou.css';
import Titulo from '../../../components/Titulo/Titulo';
import { useState, useEffect } from 'react';
import mobileBg from "../../../assets/imgsMobile/imgSuelieCris2.jpg";
import desktopBg from "../../../assets/imgsDesktop/imgDesktopSuelieCris.jpg"; // Assumindo que existe versão desktop

function OndeTudoComecou() {
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const mobileImage = new Image();
        const desktopImage = new Image();
        
        mobileImage.src = mobileBg;
        desktopImage.src = desktopBg;
        
        const checkLoad = () => {
            setBgLoaded(true);
        };
        
        mobileImage.onload = checkLoad;
        desktopImage.onload = checkLoad;
        
        const timer = setTimeout(() => setBgLoaded(true), 3000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container-quem-somos-onde-tudo-comecou'>
            <Titulo titulo="Onde tudo começou" />
            <div className='container-onde-tudo-comecou'>
                <p className='text-onte-tudo-comecou'>Uma metodologia criada há mais de 10 anos, que une nutrição, praticidade e o 
                    sabor que você nunca imaginou que uma alimentação saudável poderia ter!</p>
            </div>
            <div className='container-imagem-suelie-cris'>
                <link rel="preload" href={mobileBg} as="image" media="(max-width: 767px)" />
                <link rel="preload" href={desktopBg} as="image" media="(min-width: 768px)" />
                
                <div className={`imgSuelieCris ${bgLoaded ? 'loaded' : 'loading'}`} />
            </div>
        </div>
    )
}

export default OndeTudoComecou;