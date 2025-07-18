import "./ExisteUmCaminho.css";
import imgComputador from "../../../assets/imgsDesktop/imgDesktopComputador.jpg";
import Titulo from "../../../components/Titulo/Titulo";

function ExisteUmCaminho() {
  return (
    <div className="container-existe-caminho-diferente">
      <Titulo titulo="EXISTE UM CAMINHO DIFERENTE" />

      <p className="texto-existe-caminho-diferente">
        Um caminho onde a nutrição não é sinônimo de privação. Onde as dietas
        não são sentenças. Onde o que é saudável também é saboroso. Na Alme,
        acreditamos que a verdadeira transformação começa de dentro. Não apenas
        com o que você come, mas com como você se sente ao comer.
      </p>

      <div className="container-img-existe-caminho-diferente">
        <img src={imgComputador} alt="Suco Alme" className="img-existe-caminho-diferente" />
      </div>
      
    </div>
  );
}

export default ExisteUmCaminho;