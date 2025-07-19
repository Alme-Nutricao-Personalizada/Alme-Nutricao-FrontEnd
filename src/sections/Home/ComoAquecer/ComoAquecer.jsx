import { Link } from "react-router-dom";
import Titulo from "../../../components/Titulo/Titulo";
import "./ComoAquecer.css";

function ComoAquecer() {
  return (
    <div className="como-aquecer">
      <Titulo titulo="Como aquecer?" />

      <div className="container-como-aquecer">
        <div className="overlay-como-aquecer" />

        <div className="bg-image img1"></div>
        <div className="bg-image img2"></div>
        <div className="bg-image img3"></div>

        <div className="text-overlay">
          <h1>Modo de preparo</h1>
          <Link to='/comoAquecer' onClick={() => window.scrollTo(0, 0)} className="text-como-aquecer">Clique e confira o passo a passo e todos os modos de aquecimento
            para cada tipo de refeição. </Link>
        </div>
      </div>
    </div>
  );
}

export default ComoAquecer;