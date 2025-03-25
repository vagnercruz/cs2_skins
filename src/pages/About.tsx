import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-64">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60"
              alt="Profile Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60"
              alt="Profile"
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
            />
          </div>

          <div className="pt-20 p-6 text-center">
            <h1 className="text-3xl font-bold mb-2">Seu Nome</h1>
            <p className="text-gray-400 mb-6">Trader CS2 & Entusiasta de Skins</p>

            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6">
                Olá! Sou um trader apaixonado por CS2 com mais de X anos de experiência no mercado de skins.
                Minha missão é ajudar outros jogadores a encontrarem as melhores skins pelos melhores preços,
                sempre com segurança e transparência em todas as negociações.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-xl text-yellow-500">1000+</h3>
                  <p className="text-gray-400">Trades Realizados</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-xl text-yellow-500">100%</h3>
                  <p className="text-gray-400">Feedback Positivo</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-xl text-yellow-500">5 Anos</h3>
                  <p className="text-gray-400">de Experiência</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}