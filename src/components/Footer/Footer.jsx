import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="alme-nutricao-footer">
          <h3>ALME NUTRIÇÃO</h3>
          <p>
            A Alme vai muito além da nutrição tradicional, oferencedo uma
            metodologia que une nutrição, praticidade e o sabor que você nunca
            imaginou que uma alimentação saudável poderia ter!
          </p>
        </div>
        <div className="entre-em-contato-footer">
          <h3>Entre em contato</h3>
          <p>
            <b>WhatsApp: </b>
            <a
              href="https://wa.me/5511994214975"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 11 99421-4975
            </a>
          </p>
          <p>
            <b>e-mail: </b>
            <a
              href="mailto:nutricionista@almenutricao.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              nutricionista@almenutricao.com.br
            </a>
          </p>
          <p>
            <b>Instagram: </b>
            <a
              href="https://www.instagram.com/alme.nutricao?igsh=ZmptY24xaHF3bmd1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @almenutricao
            </a>
          </p>
        </div>
        <div>
          <h3>Mais informações</h3>
          <Link to="/politicaPrivacidade" onClick={() => window.scrollTo(0, 0)}>
            Política de privacidade
          </Link>
        </div>
      </div>

      <p className="direitos-footer">
        © ALME NUTRIÇÃO - 2025. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;