import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Trilha Sonora</h2>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop&q=60"
              alt="Music Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
              <h3 className="text-xl font-semibold">Nome da Música</h3>
              <p className="text-gray-400">Artista</p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/path-to-your-music.mp3"
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={togglePlay}
              className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-black" />
              ) : (
                <Play className="h-6 w-6 text-black" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}