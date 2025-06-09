export const FeaturesView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
            Características
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Descubre todo lo que hace de J'acha una experiencia única e inolvidable
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                COMBATE ÉPICO
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Batallas Multijugador <span className="text-yellow-400">Intensas</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Hasta 8 jugadores pueden unirse en batallas épicas en tiempo real. Forma equipos, coordina estrategias y
                domina el campo de batalla con tus amigos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Matchmaking inteligente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Comunicación por voz integrada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Servidores dedicados</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700">
                <div className="text-6xl mb-4 text-center">🎮</div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Modo Multijugador</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-600/30 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">2-8</div>
                    <div className="text-sm text-gray-300">Jugadores</div>
                  </div>
                  <div className="bg-green-600/30 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">{"<"}30ms</div>
                    <div className="text-sm text-gray-300">Latencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700">
                <div className="text-6xl mb-4 text-center">🦓</div>
                <h3 className="text-2xl font-bold text-white text-center mb-6">Personajes Únicos</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-white">Cebra Velocista</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full">
                      <div className="w-14 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-white">Cebra Tanque</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full">
                      <div className="w-12 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-white">Cebra Francotirador</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full">
                      <div className="w-10 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                PERSONALIZACIÓN
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Cebras con <span className="text-blue-400">Personalidad</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Cada cebra tiene habilidades únicas, estilos de combate diferentes y armas de espuma especializadas.
                Encuentra tu estilo de juego perfecto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">6 tipos de cebras diferentes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Sistema de progresión único</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Skins y accesorios desbloqueables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Arsenal de <span className="text-yellow-400">Espumas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Domina diferentes tipos de armas de espuma, cada una con características únicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-center">💧</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Espuma Básica</h3>
              <p className="text-gray-300 text-sm text-center mb-4">Rápida y precisa para combates ágiles</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daño</span>
                  <span className="text-blue-400">★★☆☆☆</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Velocidad</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-800/50 to-red-900/50 p-6 rounded-2xl border border-red-500/30 hover:border-red-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-center">🔥</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Espuma Explosiva</h3>
              <p className="text-gray-300 text-sm text-center mb-4">Gran daño en área de efecto</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daño</span>
                  <span className="text-red-400">★★★★★</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Velocidad</span>
                  <span className="text-red-400">★★☆☆☆</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-6 rounded-2xl border border-green-500/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Espuma Precisión</h3>
              <p className="text-gray-300 text-sm text-center mb-4">Perfecta para francotiradores</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daño</span>
                  <span className="text-green-400">★★★★☆</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Precisión</span>
                  <span className="text-green-400">★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Espuma Eléctrica</h3>
              <p className="text-gray-300 text-sm text-center mb-4">Paraliza temporalmente a los enemigos</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Efecto</span>
                  <span className="text-purple-400">★★★★★</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duración</span>
                  <span className="text-purple-400">★★★☆☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Modos de <span className="text-red-400">Juego</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-8 rounded-2xl border border-yellow-500/30">
              <div className="text-5xl mb-6 text-center">👑</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Rey de la Colina</h3>
              <p className="text-gray-300 text-center mb-6">
                Controla el punto central del mapa mientras los diablitos intentan recuperarlo
              </p>
              <div className="text-center">
                <span className="bg-yellow-600/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold">
                  2-6 Jugadores
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-8 rounded-2xl border border-red-500/30">
              <div className="text-5xl mb-6 text-center">⚔️</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Batalla Total</h3>
              <p className="text-gray-300 text-center mb-6">
                Combate sin cuartel donde el último equipo en pie se lleva la victoria
              </p>
              <div className="text-center">
                <span className="bg-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-bold">
                  4-8 Jugadores
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-8 rounded-2xl border border-blue-500/30">
              <div className="text-5xl mb-6 text-center">🏃</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Escape Épico</h3>
              <p className="text-gray-300 text-center mb-6">
                Las cebras deben escapar mientras los diablitos las persiguen por toda la ciudad
              </p>
              <div className="text-center">
                <span className="bg-blue-600/30 text-blue-400 px-4 py-2 rounded-full text-sm font-bold">
                  3-6 Jugadores
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
