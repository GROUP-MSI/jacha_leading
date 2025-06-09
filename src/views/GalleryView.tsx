"use client"

import { useState } from "react"
import image from "../assets/images/game_background.png";
interface ImageProps
{
  id: number,
  src: String,
  title: String,
  description: String,
}


export const GalleryView = () => {
  const [selectedImage, setSelectedImage] = useState<ImageProps>()

  const gameImages = [
    {
      id: 1,
      src: image,
      title: "Batalla Épica en la Ciudad",
      description: "Una cebra se enfrenta al diablito gigante en las calles bolivianas",
    },
    {
      id: 2,
      src: image,
      title: "Combate Multijugador",
      description: "Hasta 8 jugadores en batallas intensas",
    },
    {
      id: 3,
      src: image,
      title: "Arsenal de Espumas",
      description: "Diferentes tipos de armas de espuma disponibles",
    },
    {
      id: 4,
      src: image,
      title: "Diablitos de la Morenada",
      description: "Los imponentes enemigos inspirados en la cultura boliviana",
    },
    {
      id: 5,
      src: image,
      title: "Cebras Heroicas",
      description: "Los valientes protagonistas con sus habilidades únicas",
    },
    {
      id: 6,
      src: image,
      title: "Escenarios Urbanos",
      description: "Mapas detallados inspirados en ciudades bolivianas",
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Trailer Oficial de J'acha",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "2:30",
    },
    {
      id: 2,
      title: "Gameplay Multijugador",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "5:45",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-6">
            Galería
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Explora el mundo visual de J'acha a través de capturas de pantalla, arte conceptual y videos
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver más
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Videos y <span className="text-red-400">Trailers</span>
            </h2>
            <p className="text-xl text-gray-300">Mira Jacha en acción con nuestros videos oficiales</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 grod">
            {videos.map((video) => (
              <div key={video.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Duración: {video.duration}</span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">HD</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage({id : 0, src: "", description: "", title: ""})}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={(selectedImage.src as unknown as string) || "/placeholder.svg"}
              alt={String(selectedImage.title)}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              onClick={() => setSelectedImage({id : 0, src: "", description: "", title: ""})}
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-4 rounded-xl">
              <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
