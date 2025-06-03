import React from 'react';
import { FaGamepad, FaTrophy, FaUsers, FaCog, FaChartLine } from 'react-icons/fa';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaGamepad className="text-4xl text-blue-500 mb-6" />,
      title: "Gameplay Innovador",
      description: "Disfruta de mecánicas de juego únicas que te mantendrán enganchado durante horas."
    },
    {
      icon: <FaTrophy className="text-4xl text-blue-500 mb-6" />,
      title: "Sistema de Logros",
      description: "Desbloquea logros y muestra tus habilidades frente a otros jugadores."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500 mb-6" />,
      title: "Multijugador",
      description: "Juega con amigos o compite contra jugadores de todo el mundo en tiempo real."
    },
    {
      icon: <FaCog className="text-4xl text-blue-500 mb-6" />,
      title: "Personalización",
      description: "Personaliza tu personaje y equipo para adaptarlos a tu estilo de juego."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500 mb-6" />,
      title: "Progresión",
      description: "Sistema de niveles y habilidades que evolucionan con tu experiencia."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Características Principales</h2>
        <p className="text-xl text-gray-600 mb-12">Descubre lo que hace especial a nuestro juego</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;