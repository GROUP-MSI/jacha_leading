import logo from "../assets/images/game_background.png"


export const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-yellow-800 to-green-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                J'ACHA
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-yellow-300">El Gran Poder de Bolivia</p>
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                Sumérgete en una épica batalla boliviana donde las valientes cebras se enfrentan a los poderosos
                diablitos de la morenada. Un juego multijugador que celebra nuestra cultura con acción intensa y
                diversión sin límites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
                  ¡JUGAR AHORA!
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg text-xl font-bold transform hover:scale-105 transition-all duration-300">
                  Ver Trailer
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <img
                src={logo}
                alt="Jacha Gameplay"
                className="relative rounded-3xl shadow-2xl border-4 border-yellow-400/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              La Batalla <span className="text-yellow-400">Épica</span> Comienza
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En las calles de Bolivia, el diablo ha poseído a los diablitos gigantes de la morenada. Solo las heroicas
              cebras, armadas con espumas mágicas, pueden salvar el día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-800/50 to-red-900/50 p-8 rounded-2xl border border-red-500/30 hover:border-red-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🦓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Héroes Cebras</h3>
              <p className="text-gray-300">
                Controla a las valientes cebras, cada una con habilidades únicas y armas de espuma especializadas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-800/50 to-yellow-900/50 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">👹</div>
              <h3 className="text-2xl font-bold text-white mb-4">Diablitos Gigantes</h3>
              <p className="text-gray-300">
                Enfrenta a los imponentes diablitos de la morenada, poseídos por el mismísimo diablo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-8 rounded-2xl border border-green-500/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Multijugador</h3>
              <p className="text-gray-300">Únete con amigos en batallas épicas de hasta 8 jugadores en tiempo real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Tecnología de <span className="text-yellow-400">Vanguardia</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">U</span>
              </div>
              <h3 className="text-white font-bold">Unity</h3>
              <p className="text-gray-400 text-sm">Motor de Juego</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-white font-bold">Blender</h3>
              <p className="text-gray-400 text-sm">Modelado 3D</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-600 to-red-800 w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">N</span>
              </div>
              <h3 className="text-white font-bold">NestJS</h3>
              <p className="text-gray-400 text-sm">Backend</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-white font-bold">PostgreSQL</h3>
              <p className="text-gray-400 text-sm">Base de Datos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}