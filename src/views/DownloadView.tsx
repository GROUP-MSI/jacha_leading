"use client"

import { useState } from "react"

export const DownloadView= () => {
  const [selectedPlatform, setSelectedPlatform] = useState("windows")

  const systemRequirements = {
    windows: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 750 Ti / AMD Radeon R7 260X",
        directx: "Version 11",
        storage: "15 GB available space",
        network: "Broadband Internet connection",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 580",
        directx: "Version 12",
        storage: "25 GB available space (SSD recommended)",
        network: "Broadband Internet connection",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Descargar
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            ¡Prepárate para la batalla más épica de Bolivia!
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg">
            🎮 BETA DISPONIBLE AHORA
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Download Section */}
          <div className="space-y-8">
            {/* Platform Selection */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Selecciona tu Plataforma</h2>

              <div className="grid gap-4">
                <div
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPlatform === "windows"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-gray-600 bg-gray-700/30 hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedPlatform("windows")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🪟</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Windows</h3>
                      <p className="text-gray-300">Windows 10/11 - 64 bits</p>
                    </div>
                    <div className="ml-auto">
                      {selectedPlatform === "windows" && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border-2 border-gray-600 bg-gray-700/30 opacity-50">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🍎</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">macOS</h3>
                      <p className="text-gray-300">Próximamente</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">Pronto</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border-2 border-gray-600 bg-gray-700/30 opacity-50">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🐧</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Linux</h3>
                      <p className="text-gray-300">En desarrollo</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 p-8 rounded-3xl border border-emerald-500/30 text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">⬇️</div>
                <h3 className="text-2xl font-bold text-white mb-2">J'acha Beta v0.8.5</h3>
                <p className="text-gray-300">Tamaño: ~2.1 GB</p>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-6 px-8 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 shadow-lg mb-4">
                Descargar para Windows
              </button>

              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>📁 Instrucciones de instalación:</strong>
                  <br />
                  Coloca el archivo <code className="bg-black/30 px-2 py-1 rounded">JachaInstaller.exe</code> en la
                  carpeta <code className="bg-black/30 px-2 py-1 rounded">/assets/installers/</code> de tu proyecto
                </p>
              </div>
            </div>

            {/* Beta Info */}
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Información de la Beta</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Modo multijugador completo (2-8 jugadores)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>3 mapas urbanos disponibles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>6 tipos de cebras jugables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Sistema de progresión básico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Algunas características en desarrollo</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-8">Requisitos del Sistema</h2>

              <div className="space-y-8">
                {/* Minimum Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Requisitos Mínimos
                  </h3>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sistema Operativo:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.os}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Procesador:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memoria:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gráficos:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">DirectX:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.directx}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Almacenamiento:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Red:</span>
                        <span className="text-white">{systemRequirements.windows.minimum.network}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                    <span className="mr-2">✅</span>
                    Requisitos Recomendados
                  </h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sistema Operativo:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.os}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Procesador:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.processor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memoria:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gráficos:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.graphics}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">DirectX:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.directx}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Almacenamiento:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Red:</span>
                        <span className="text-white">{systemRequirements.windows.recommended.network}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Guía de Instalación</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Descarga el instalador</h4>
                    <p className="text-gray-300 text-sm">Haz clic en el botón de descarga y guarda el archivo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ejecuta como administrador</h4>
                    <p className="text-gray-300 text-sm">Clic derecho → "Ejecutar como administrador"</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sigue las instrucciones</h4>
                    <p className="text-gray-300 text-sm">El instalador te guiará paso a paso</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">¡Listo para jugar!</h4>
                    <p className="text-gray-300 text-sm">Crea tu cuenta y únete a la batalla</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-3xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">¿Problemas con la instalación?</h3>
              <p className="text-gray-300 mb-6">
                Si tienes dificultades, nuestro equipo de soporte está aquí para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
                  Contactar Soporte
                </button>
                <button className="border border-orange-500 text-orange-400 hover:bg-orange-500/20 px-6 py-3 rounded-xl font-semibold transition-colors duration-300">
                  Ver FAQ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-white font-bold mb-2">Actualizaciones Automáticas</h3>
            <p className="text-gray-300 text-sm">
              El juego se actualiza automáticamente con nuevas características y correcciones
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-white font-bold mb-2">Guardado en la Nube</h3>
            <p className="text-gray-300 text-sm">Tu progreso se sincroniza automáticamente en todos tus dispositivos</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-white font-bold mb-2">Anti-Cheat</h3>
            <p className="text-gray-300 text-sm">Sistema avanzado de protección para garantizar partidas justas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
