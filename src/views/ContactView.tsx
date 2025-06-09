"use client"

import { useState } from "react"

export const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e : any) => {
    e.preventDefault()
    // Aquí implementarías la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado! Te contactaremos pronto.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Contacto
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre J'acha? ¡Nos encantaría escucharte!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8">Envíanos un Mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="bug">Reporte de Bug</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="prensa">Prensa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Team Info */}
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Equipo de Desarrollo</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Desarrollo del Juego</h4>
                    <p className="text-gray-300 text-sm">Unity, Blender, C#</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⚙️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Backend</h4>
                    <p className="text-gray-300 text-sm">NestJS, PostgreSQL</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎨</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Arte y Diseño</h4>
                    <p className="text-gray-300 text-sm">Modelado 3D, Texturas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-blue-600/30 hover:bg-blue-600/50 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="text-2xl">📘</div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-300">Facebook</div>
                    <div className="text-gray-400 text-sm">@JachaGame</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 bg-cyan-600/30 hover:bg-cyan-600/50 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="text-2xl">🐦</div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-cyan-300">Twitter</div>
                    <div className="text-gray-400 text-sm">@JachaGame</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 bg-red-600/30 hover:bg-red-600/50 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="text-2xl">📺</div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-red-300">YouTube</div>
                    <div className="text-gray-400 text-sm">Jacha Game</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 bg-purple-600/30 hover:bg-purple-600/50 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="text-2xl">📷</div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-purple-300">Instagram</div>
                    <div className="text-gray-400 text-sm">@jacha_game</div>
                  </div>
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-8 rounded-3xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-3">
                <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  • ¿Cuándo será el lanzamiento oficial?
                </div>
                <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  • ¿Habrá versión para móviles?
                </div>
                <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  • ¿Cómo puedo participar en la beta?
                </div>
                <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  • ¿El juego será gratuito?
                </div>
                <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  • ¿Habrá torneos oficiales?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
