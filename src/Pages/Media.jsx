import { useState } from "react"
import ImageGallery from "../Components/ImageGallary.jsx";

const videos = [
  {
    id: "R4htJl8nBrQ",
    url: "https://www.youtube.com/embed/R4htJl8nBrQ",
    title: "Result vs Reality",
    thumbnail: `https://img.youtube.com/vi/R4htJl8nBrQ/mqdefault.jpg`,
  },
  {
    id: "QvQos0V-Kl4",
    url: "https://www.youtube.com/embed/QvQos0V-Kl4",
    title: "Prophetic Leadership",
    thumbnail: `https://img.youtube.com/vi/QvQos0V-Kl4/mqdefault.jpg`,
  },
  {
    id: "3FA7UYU3xRo",
    url: "https://www.youtube.com/embed/3FA7UYU3xRo",
    title: "Madrasa Potential",
    thumbnail: `https://img.youtube.com/vi/3FA7UYU3xRo/mqdefault.jpg`,
  },
  {
    id: "Wth0pNMnzGg",
    url: "https://www.youtube.com/embed/Wth0pNMnzGg",
    title: "Satan’s Trap",
    thumbnail: `https://img.youtube.com/vi/Wth0pNMnzGg/mqdefault.jpg`,
  },
  {
    id: "vDEXjZZEkpg",
    url: "https://www.youtube.com/embed/vDEXjZZEkpg",
    title: "Fitr Charity",
    thumbnail: `https://img.youtube.com/vi/vDEXjZZEkpg/mqdefault.jpg`,
  },
  {
    id: "3xWuS4MmtzM",
    url: "https://www.youtube.com/embed/3xWuS4MmtzM",
    title: "Proxy Hajj",
    thumbnail: `https://img.youtube.com/vi/3xWuS4MmtzM/mqdefault.jpg`,
  },
  {
    id: "sAhVmFLfoBs",
    url: "https://www.youtube.com/embed/sAhVmFLfoBs",
    title: "Qurbani Rules",
    thumbnail: `https://img.youtube.com/vi/sAhVmFLfoBs/mqdefault.jpg`,
  },
  {
    id: "V8fU6crKWOk",
    url: "https://www.youtube.com/embed/V8fU6crKWOk",
    title: "Post-Death Rituals",
    thumbnail: `https://img.youtube.com/vi/V8fU6crKWOk/mqdefault.jpg`,
  },
]

const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="text-center py-10 border-b-4 border-gray-500">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Gallery
        </h1>
        <p className="text-gray-400 text-lg">Curated collection of amazing visuals</p>
      </div>

      <div className="h-32 bg-gradient-to-b from-gray-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Video Player */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo.url}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Video Sidebar */}
          <div className="lg:w-80 mb-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
              <div className="max-h-[600px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-3">
                {videos.map((video, index) => (
                  <div key={video.id}>
                    <div
                      onClick={() => setSelectedVideo(video)}
                      className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${selectedVideo.id === video.id
                          ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                          : "hover:bg-gray-800/50 hover:scale-105"
                        }`}
                    >
                      <div className="flex items-center space-x-3 p-3">
                        {/* Video Number */}
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedVideo.id === video.id
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                            }`}
                        >
                          {index + 1}
                        </div>

                        {/* Thumbnail */}
                        <div className="flex-shrink-0 relative">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-20 h-12 object-cover rounded-lg"
                            crossOrigin="anonymous"
                          />
                          {selectedVideo.id === video.id && (
                            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-y-[3px] border-y-transparent ml-0.5"></div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Video Info */}
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-medium text-sm truncate ${selectedVideo.id === video.id ? "text-white" : "text-gray-300 group-hover:text-white"
                              }`}
                          >
                            {video.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 mt-1">
                            {selectedVideo.id === video.id ? "Now Playing" : "Click to play"}
                          </p>
                        </div>

                        {/* Play Icon */}
                        {selectedVideo.id !== video.id && (
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-0.5"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Horizontal Divider */}
                    {index < videos.length - 1 && (
                      <div className="my-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 10px;
          border: 1px solid rgba(55, 65, 81, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8b5cf6 0%, #ec4899 100%);
          border-radius: 10px;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed 0%, #db2777 100%);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: rgba(17, 24, 39, 0.5);
        }
      `}</style>

      <ImageGallery />

    </div>
    

  )
}

export default Media
