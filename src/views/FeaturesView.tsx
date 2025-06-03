import React from "react";
import {
  FaGamepad,
  FaTrophy,
  FaUsers,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import "./Features.css"; // Asegúrate de crear este archivo CSS

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaGamepad className="feature-icon" />,
      title: "Gameplay Innovador",
      description:
        "Disfruta de mecánicas de juego únicas que te mantendrán enganchado durante horas.",
    },
    {
      icon: <FaTrophy className="feature-icon" />,
      title: "Sistema de Logros",
      description:
        "Desbloquea logros y muestra tus habilidades frente a otros jugadores.",
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: "Multijugador",
      description:
        "Juega con amigos o compite contra jugadores de todo el mundo en tiempo real.",
    },
    {
      icon: <FaCog className="feature-icon" />,
      title: "Personalización",
      description:
        "Personaliza tu personaje y equipo para adaptarlos a tu estilo de juego.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Progresión",
      description:
        "Sistema de niveles y habilidades que evolucionan con tu experiencia.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Características Principales</h2>
        <p className="section-subtitle">
          Descubre lo que hace especial a nuestro juego
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
