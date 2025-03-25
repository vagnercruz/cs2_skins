import React, { useState } from 'react';
import { Search, Star, Shield, DollarSign, PocketKnife as Knife, Sun as Gun, Phone, ArrowUp } from 'lucide-react';
import { skins, categories } from '../data/skins';
import { getRarityColor } from '../utils/colors';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'rifle' | 'knife' | 'pistol' | 'smg'>('all');

  const handleWhatsAppClick = (skin: any) => {
    const message = encodeURIComponent(
      `Olá! Estou interessado na skin:\n\n` +
      `🎮 ${skin.weapon} | ${skin.name}\n` +
      `📊 ${skin.wear} (Float: ${skin.float})\n` +
      `${skin.stattrak ? '⭐ StatTrak™\n' : ''}${skin.souvenir ? '🏆 Souvenir\n' : ''}` +
      `💰 Preço: ${skin.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n` +
      `🔄 Preço Upgrade: ${skin.upgradePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n\n` +
      `Podemos negociar?`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const filteredSkins = skins.filter(skin => {
    const matchesSearch = skin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skin.weapon.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || skin.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-4 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar skins..."
                className="bg-gray-700 px-4 py-2 rounded-lg pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkins.map((skin) => (
            <div key={skin.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={skin.image} alt={skin.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className={`text-xl font-bold ${getRarityColor(skin.rarity)}`}>
                    {skin.weapon} | {skin.name}
                  </h2>
                  <div className="flex gap-2">
                    {skin.stattrak && (
                      <span className="bg-orange-500 text-xs px-2 py-1 rounded">StatTrak™</span>
                    )}
                    {skin.souvenir && (
                      <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded">Souvenir</span>
                    )}
                    {!skin.stattrak && !skin.souvenir && (
                      <span className="bg-gray-600 text-xs px-2 py-1 rounded">Normal</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Shield className="h-4 w-4" />
                  <span>{skin.wear} (Float: {skin.float})</span>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center justify-between text-yellow-500">
                    <span className="text-sm text-gray-400">Preço 100%</span>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5" />
                      <span className="text-xl font-bold">{skin.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-green-500">
                    <span className="text-sm text-gray-400">Preço Upgrade</span>
                    <div className="flex items-center">
                      <ArrowUp className="h-5 w-5" />
                      <span className="text-lg font-bold">{skin.upgradePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(skin)}
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded transition-colors w-full mt-2"
                  >
                    <Phone className="h-4 w-4" />
                    Comprar via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}