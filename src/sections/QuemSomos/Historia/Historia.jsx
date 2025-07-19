import "./Historia.css";
import imgSueli from "../../../assets/imgsDesktop/imgDesktopSueli.jpg";
import imgYakisoba from "../../../assets/imgsDesktop/imgDesktopPrato.jpg";

function Historia() {
  return (
    <div className="container-historia">
      <div>
        <h1 className="titulo-historia">Nasce uma metodologia</h1>
        <p className="text-historia">
          Nossa história começou em 2012 com uma busca pessoal por mudança.
          Cristina Nozuma queria muito mudar de vida, ter um novo propósito.
          Encontrou uma nutricionista que a acompanhou na perda de peso e a
          partir daí, tudo começou a mudar.
        </p>
        <p className="text-historia">
          Com o passar do tratamento, Cristina percebeu que o segredo não estava
          somente na dieta, mas nas mãos da sua mãe, Sueli Nozuma, que tornava
          cada refeição ainda mais gostosa, cheia de amor e a aproximava do seu
          objetivo de forma leve e prazerosa.
        </p>
        <p className="text-historia">
          O resultado? 35 quilos perdidos e, sem perceber, já tinha se encantado
          pela profissão! Foi fator decisivo na sua escolha de vida e se tornou
          nutricionista.
        </p>
      </div>

      <div className="container-descorta-ingrediente-secreto">
        <div className="text-descorta-ingrediente-secreto">
          <h1 className="titulo-historia">A descoberta do ingrediente secreto</h1>

          <p className="text-historia">
            Quando Cristina começou a atender seus clientes, quis trazer um
            pouco da sua vivência para uma metodologia. Mas sentia que faltava
            algo para que seus clientes alcançassem seus resultados.
          </p>

          <p className="text-historia">
            Faltava o que sua mãe lhe deu: comida de verdade, com sabor e
            propósito. E aí surgiu a ALME.
          </p>

          <p className="text-historia">
            Sem nome, sem plano de marketing e com embalagens básicas, iniciou o
            projeto com seus pacientes e logo pôde ver os resultados que viveu,
            agora com eles.
          </p>
        </div>

        <div className="img-descorta-ingrediente-secreto">
          <img src={imgSueli} className="imgSueli" alt="Dona Sueli"/>
        </div>
      </div>

      <div className="container-receita-sucesso">
        <div className="img-receita-sucesso">
          <img src={imgYakisoba} className="imgYakisoba" alt="Prato de Yakisoba"/>
        </div>

        <div className="text-receita-sucesso">
          <h1 className="titulo-historia">A receita do sucesso</h1>
          <p className="text-historia yakisoba">
            Foi então que percebeu que a receita do sucesso ia muito além da
            nutrição tradicional. É sobre o carinho, o sabor e a praticidade de
            cada comida que os resultados passaram a aparecer. Foi isso que teve
            em casa e é o que queria oferecer aos seus clientes.
          </p>

          <p className="text-historia yakisoba">
            Começou dentro de casa, da forma que podiam, somente para poucos
            clientes de Cristina. Quando a demanda aumentou, profissionalizaram
            e cresceram a equipe para melhorar ainda mais e trazer tecnologia
            para o negócio.
          </p>

          <p className="text-historia yakisoba">
            Hoje somos uma equipe dedicada, com mais de 2.000 receitas e muitas
            vidas se transformando com o mesmo amor e carinho desde o início da
            nossa história.
          </p>
        </div>
      </div>

      <div>
        <h1 className="titulo-historia">Nossa Metodologia</h1>

        <p className="text-historia">
          Nossa metodologia nasceu dessa convicção. Da certeza de que a nutrição
          precisa ir além da ciência dos números e abraçar a arte do cuidado.
          Criamos receitas com alma porque entendemos que cada garfada deve
          nutrir não apenas o corpo, mas também o espírito e a vontade de
          continuar.
        </p>

        <p className="text-historia">
          Oferecemos personalização completa porque seu corpo, sua história e
          seus objetivos são únicos como você.
        </p>

        <p className="text-historia">
          Entregamos nutrição com propósito porque sabemos que o verdadeiro
          resultado não se mede apenas na balança, mas na energia e qualidade de
          vida que você carrega todos os dias. Garantimos praticidade com sabor
          porque acreditamos que viver bem não deveria ser complicado. A vida já
          é. Sua alimentação não precisa ser.
        </p>
      </div>

      <div>
        <h1 className="titulo-historia">Hoje: Mais de 10 Anos de Transformação</h1>
        <p className="text-historia">
          Hoje, entregamos refeições personalizadas direto na sua casa. Sem
          desculpas, sem complicação. E desenhada de forma ultra personalizada
          para cada cliente! Não é só comida. É a receita da Dona Sueli, e de
          toda uma equipe que trabalha e preza pelo cuidado e amor em cada
          refeição que você escolhe. Isso mesmo, você escolhe e monta o seu
          cardápio como quer dentro do seu objetivo de vida. Seja ele qual for,
          mas sempre com um sabor especial, uma memória afetiva.
        </p>
      </div>

      <div>
        <h1 className="titulo-historia">
          Na Alme, não seguimos dietas. Transformamos vidas. De dentro para
          fora.
        </h1>
        <p className="text-historia">
          Por isso vamos muito além da nutrição tradicional. Somos uma
          metodologia criada há mais de 10 anos que une nutrição, praticidade e
          o sabor que você nunca imaginou que uma alimentação saudável poderia
          ter!
        </p>
      </div>

      <div className="container-isso-e-a-alme">
        <p>Isso é a Alme</p>
        <p>Sejam bem-vindos!</p>
        <p>
          Nutrição com propósito, uma metodologia que une nutrição, praticidade
          e o sabor que você nunca imaginou que uma alimentação saudável poderia
          ter.
        </p>
      </div>
    </div>
  );
}

export default Historia;
