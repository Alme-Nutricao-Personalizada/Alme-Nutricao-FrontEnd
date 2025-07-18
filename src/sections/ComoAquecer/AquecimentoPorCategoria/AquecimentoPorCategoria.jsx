import { useState } from "react";
import "./AquecimentoPorCategoria.css";

function AquecimentoPorCategoria() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const preparationData = [
    {
      title: "Preparações de aves e carne vermelha (bovina e suína)",
      content: [
        "Banho maria - 6 a 12 min",
        "Microondas - 2 a 3 min",
        "*Rasgue (± 2 cm) no local indicado."
      ]
    },
    {
      title: "Preparações de peixe",
      content: [
        "Banho maria - 6 a 8 min",
        "Microondas - 1:30 a 1:40 min",
        "*Rasgue (± 2 cm) no local indicado."
      ]
    },
    {
      title: "Preparações vegetarinas",
      content: [
        "Banho maria - 3 a 4 min",
        "Microondas - 1:20 a 1:30 min",
        "*Rasgue (± 2 cm) no local indicado."
      ]
    },
    {
      title: "Acompanhamentos (arroz, grãos, legumes e verduras)",
      content: [
        "Banho maria - 3 a 4 min",
        "Microondas - 1:20 a 1:30 min",
        "*Rasgue (± 2 cm) no local indicado."
      ]
    },
    {
      title: "Massa e risotos",
      content: [
        "Banho maria - 7 a 8 min",
        "Microondas - 2:30 a 3 min",
        "*Rasgue (± 2 cm) no local indicado."
      ]
    },
    {
      title: "Sopas, caldos e mingau",
      content: [
        "Banho maria - 10 a 12 min",
        "Microondas - 2 min",
        "*Rasgue (± 2 cm) no local indicado.",
        "*Retire, mexa e adicione mais 2 min.",
        "Panela - 4 min",
        "*Aqueça em fogo baixo até diluir.",
        "*Para uma textura mais leve, adicione 50 ml de água."
      ]
    },
    {
      title: "Lanches refeições",
      content: [
        "*Rasgue (± 2 cm) no local indicado.",
        "Microondas - 2:30 a 3 min",
        "Forno - 4 - 6 min",
        "Air Fryer - 3 - 5 min a 200 graus",
        "*Abra o sanduíche para aquecimento"
      ]
    },
    {
      title: "Lanches salgados",
      content: [
        "Microondas - 1:30 a 2 min",
        "*Rasgue (± 2 cm) no local indicado.",
        "Forno - 8 min",
        "Air Fryer - 3 - 5 min a 200 graus"
      ]
    },
    {
      title: "Bolinhos, pães, panini, dadinho de tapioca, crepioca",
      content: [
        "Banho maria - 5 - 7 min",
        "Microondas - 0:30 a 0:35 seg",
        "*Rasgue (± 2 cm) no local indicado.",
        "Forno - 3 a 6 min",
        "Air Fryer - 3 - 5 min a 200 graus"
      ]
    }
  ];

  return (
    <div className="container-aquecimento-por-categoria">
      <div className="container-preparacoes-aquecimento-por-categoria">
        <h1>Aquecimento por categoria</h1>
        <div>
          <p>
            <b>Snacks doces, snacks salgados, sucos, chás e suchás: </b>
            Descongelamento natural
          </p>
        </div>

        {preparationData.map((prep, index) => (
          <div className="container-preparacoes" key={index}>
            <button 
              className="container-preparacoes-titulo"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems[index]}
            >
              <b>{prep.title}</b>
              <span className="arrow-icon">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
            </button>
            
            {expandedItems[index] && (
              <div className="container-preparacoes-content">
                {prep.content.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AquecimentoPorCategoria;