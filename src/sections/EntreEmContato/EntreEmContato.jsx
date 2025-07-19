import "./EntreEmContato.css";
import { useState, useEffect } from "react";
import mobileBg from "../../assets/imgsMobile/imgSacolaFechando.jpg";
import desktopBg from "../../assets/imgsDesktop/imgDesktopSacolaFechando.jpg";

function EntreEmContato() {
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
    <div className="body-entre-em-contato">
      <div className="container-img-entre-em-contato">
        <link rel="preload" href={mobileBg} as="image" media="(max-width: 767px)" />
        <link rel="preload" href={desktopBg} as="image" media="(min-width: 768px)" />
        
        <div className={`imgFechandoSacola ${bgLoaded ? "loaded" : "loading"}`}/>
        <div className="overlay-entre-em-contato"/>
      </div>
      

      <div className="container-entre-em-contato">
        <div className="container-texto-entre-em-contato">
          <div className="container-whats-entre-em-contato">
            <p><b>WhatsApp:</b> + 55 11 99421 4975</p>
            <p>Clique para iniciar uma conversa com nosso time!</p>
          </div>

          <div className="container-email-entre-em-contato">
            <p><b>Email:</b> atendimento@almenutricao.com.br</p>
            <p>Clique para nos enviar um e-mail!</p>
          </div>
        </div>

        <div className="container-button-entre-em-contato">
          <a
              href="https://wa.me/5511994214975"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats-entre-em-contato"
            >WhatsApp Alme</a>
          <a
              href="mailto:nutricionista@almenutricao.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-email-entre-em-contato"
            >E-mail Alme</a>
        </div>
      </div>
    </div>
  );
}

export default EntreEmContato;