import React from "react";
import "../../styles/LandingPage/LandingPage.css";
import { Pencil, ShieldCheck, Box, DollarSign } from "lucide-react";

export default function Diferenciais() {
  const items = [
    {
      icon: <Pencil size={50} />,
      title: "Colocar no papel o seu sonho",
      text: "Transformo suas ideias em um projeto real, pensado para refletir seu estilo e necessidades.",
    },
    {
      icon: <ShieldCheck size={50} />,
      title: "Evitar problemas e desperdícios",
      text: "Reduzo em até 90% os imprevistos da obra e evito compras desnecessárias.",
    },
    {
      icon: <Box size={50} />,
      title: "Visualizar seu imóvel em 3D",
      text: "Apresento o projeto com imagens realistas, para você enxergar o resultado antes de começar.",
    },
    {
      icon: <DollarSign size={50} />,
      title: "Realizar o projeto dentro do seu orçamento",
      text: "Planejo cada detalhe de acordo com sua disponibilidade financeira, sem perder qualidade.",
    },
  ];

  return (
    <section className="dif-section">
      <h2 className="dif-title">Nossos diferenciais</h2>

      <div className="dif-grid">
        {items.map((item, index) => (
          <div key={index} className="dif-card">
            <div className="dif-icon">{item.icon}</div>
            <h3 className="dif-card-title">{item.title}</h3>
            <p className="dif-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
