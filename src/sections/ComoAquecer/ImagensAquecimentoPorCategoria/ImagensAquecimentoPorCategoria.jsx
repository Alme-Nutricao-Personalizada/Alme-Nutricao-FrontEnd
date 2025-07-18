import "./ImagensAquecimentoPorCategoria.css";
import imgSacola1 from "../../../assets/imgsDesktop/imgDesktopAbrindoSacola1.jpg";
import imgSacola2 from "../../../assets/imgsDesktop/imgDesktopSacolaPronta.jpg";
import imgSacola3 from "../../../assets/imgsDesktop/imgDesktopServindo.jpg";
import imgSacola4 from "../../../assets/imgsDesktop/imgDesktopPanela.jpg";

function ImagensAquecimentoPorCategoria() {
  return (
    <div className="container-aquecimento-por-categoria">
      <div className="container-imgs-aquecimento-por-categoria">
        <div className="overlay-aquecimento-por-categoria" />

        <div className="bg-image-aquecimento-por-categoria">
          <img
            src={imgSacola1}
            alt="Sacola"
            className="img-sacola-aquecimento-por-categoria"
          />
        </div>

        <div className="bg-image-aquecimento-por-categoria">
          <img
            src={imgSacola2}
            alt="Sacola"
            className="img-sacola-aquecimento-por-categoria"
          />
        </div>

        <div className="bg-image-aquecimento-por-categoria">
          <img
            src={imgSacola3}
            alt="Sacola"
            className="img-sacola-aquecimento-por-categoria"
          />
        </div>

        <div className="bg-image-aquecimento-por-categoria">
          <img
            src={imgSacola4}
            alt="Sacola"
            className="img-sacola-aquecimento-por-categoria img4"
          />
        </div>
      </div>
    </div>
  );
}

export default ImagensAquecimentoPorCategoria;