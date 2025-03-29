import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sword, Music, User } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sword className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold">CS2 Skins Mendino</h1>
          </Link>
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 hover:text-yellow-500 transition-colors ${
                location.pathname === '/' ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              <Sword className="h-5 w-5" />
              <span>Skins</span>
            </Link>
            <Link 
              to="/music" 
              className={`flex items-center gap-2 hover:text-yellow-500 transition-colors ${
                location.pathname === '/music' ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              <Music className="h-5 w-5" />
              <span>Música</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center gap-2 hover:text-yellow-500 transition-colors ${
                location.pathname === '/about' ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Sobre</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 CS2 Skins Mendino. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}