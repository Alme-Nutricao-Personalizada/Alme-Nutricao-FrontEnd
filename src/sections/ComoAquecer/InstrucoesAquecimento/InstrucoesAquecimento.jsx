import "./InstrucoesAquecimento.css";
import { useState, useEffect } from "react";
import mobileBg from "../../../assets/imgsMobile/imgAbrindoSacola2.jpg";
import desktopBg from "../../../assets/imgsDesktop/imgDesktopAbrindoSacola2.jpg";

function InstrucoesAquecimento() {
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
    <div>
      <div className="container-imagem-instrucoes-aquecimento">
        <link rel="preload" href={mobileBg} as="image" media="(max-width: 767px)" />
        <link rel="preload" href={desktopBg} as="image" media="(min-width: 768px)" />
        
        <div className={`imgAbrindoSacola ${bgLoaded ? "loaded" : "loading"}`} />
        <div className="overlay-instrucoes-aquecimento" />
      </div>

      <div className="container-instrucoes-aquecimento">
        <div>
          <h1 className="titulo-instrucoes-de-aquecimento">
            Instruções de aquecimento
          </h1>
          <ul>
            <li>
              As orientações a seguir são indicadas para{" "}
              <b>alimentos previamente descongelados.</b>
            </li>
            <li>
              Retire a refeição do freezer com <b>24 horas de antecedência</b> e
              mantenha sob <b>refrigeração (geladeira)</b> até o momento do
              aquecimento e consumo.
            </li>
            <li>
              Após descongelados, os alimentos podem ser consumidos em até{" "}
              <b>3 dias</b>, desde que mantidos refrigerados.
            </li>
            <li>
              <b>Não re-congele</b> refeições já descongeladas.
            </li>
            <li>
              Caso a refeição esteja congelada no momento do preparo,{" "}
              <b>some 50% ao tempo de aquecimento indicado.</b>
            </li>
          </ul>
        </div>

        <div>
          <h1>Aquecimento no banho maria</h1>
          <ul>
            <li>
              Não rasgue a embalagem, apenas a mergulhe em uma panela com 1/3 de
              água fervendo e tampe a panela até o tempo indicado.
            </li>
            <li>
              O tempo de aquecimento pode variar com a sua preferência e de
              acordo com a potência do aparelho.
            </li>
          </ul>
        </div>

        <div>
          <h1>Aquecimento no forno</h1>
          <ul>
            <li>
              Retire o produto da embalagem e leve ao forno pré aquecido a 180
              graus.
            </li>
            <li>
              O tempo de aquecimento pode variar com a sua preferência e de
              acordo com a potência do aparelho.
            </li>
          </ul>
        </div>

        <div>
          <h1>Aquecimento na Air Fryer</h1>
          <ul>
            <li>
              Retire o produto da embalagem e leve a Air Fryer a 200 graus.
            </li>
            <li>
              O tempo de aquecimento pode variar com a sua preferência e de
              acordo com a potência do aparelho.
            </li>
          </ul>
        </div>

        <div>
          <h1>Aquecimento no micro-ondas</h1>
          <ul>
            <li>
              Rasgue a embalagem cerca de 2 cm e retire os alimentos congelados
              de dentro do pacote.
            </li>
            <li>
              Transfira para um recipiente próprio para micro-ondas e aqueça
              conforme necessário.
            </li>
            <li>
              O tempo de aquecimento pode variar de acordo com a potência do
              aparelho.
            </li>
          </ul>
          <p></p>
        </div>

        <div>
          <ul>
            <li>
              Confira abaixo o tempo de aquecimento de cada categoria.
              </li>
          </ul>
        </div>
        </div>
    </div>
  );
}

export default InstrucoesAquecimento;