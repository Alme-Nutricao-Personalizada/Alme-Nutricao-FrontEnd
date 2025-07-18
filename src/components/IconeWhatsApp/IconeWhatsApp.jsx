import imgIconeWhatsApp from '../../assets/iconeWhatsapp.png';
import './IconeWhatsApp.css';

function IconeWhatsApp() {
  return (
    <div className="container-icone-whatsapp">
      <a
        href="https://wa.me/5511994214975"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button aria-label="Fale conosco no WhatsApp">
          <img src={imgIconeWhatsApp} alt="WhatsApp" />
        </button>
      </a>
    </div>
  );
}

export default IconeWhatsApp;
