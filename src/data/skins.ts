import { Star, Sun as Gun, PocketKnife as Knife } from 'lucide-react';

export type CategoryId = 
  | 'all' 
  | 'rifle' 
  | 'rifle_precisao' 
  | 'knife' 
  | 'smg' 
  | 'escopeta' 
  | 'luva' 
  | 'pistol' 
  | 'metralhadora' 
  | 'adesivo' 
  | 'chaveiro';

export const categories = [
  { id: 'all', name: 'Todas', icon: Star },
  { id: 'rifle', name: 'Rifles', icon: Gun },
  { id: 'rifle_precisao', name: 'Rifles de Precisão', icon: Gun },
  { id: 'knife', name: 'Facas', icon: Knife },
  { id: 'smg', name: 'SMGs', icon: Gun },
  { id: 'escopeta', name: 'Escopetas', icon: Gun },
  { id: 'luva', name: 'Luvas', icon: Gun },
  { id: 'pistol', name: 'Pistolas', icon: Gun },
  { id: 'metralhadora', name: 'Metralhadoras', icon: Gun },
  { id: 'adesivo', name: 'Adesivos', icon: Gun },
  { id: 'chaveiro', name: 'Chaveiros', icon: Gun }
] as const;

export const skins = [
  {
    id: 1,
    name: "Dragon Lore",
    weapon: "AWP",
    wear: "Factory New",
    price: 10000,
    upgradePrice: 8500,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop&q=60",
    float: 0.01,
    stattrak: false,
    souvenir: true,
    category: "rifle_precisao",
    rarity: "covert"
  },
  {
    id: 2,
    name: "Fade",
    weapon: "Karambit",
    wear: "Minimal Wear",
    price: 5000,
    upgradePrice: 4200,
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&auto=format&fit=crop&q=60",
    float: 0.08,
    stattrak: true,
    souvenir: false,
    category: "knife",
    rarity: "contraband"
  },
  {
    id: 3,
    name: "Asiimov",
    weapon: "M4A4",
    wear: "Field-Tested",
    price: 150,
    upgradePrice: 120,
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60",
    float: 0.25,
    stattrak: true,
    souvenir: false,
    category: "rifle",
    rarity: "classified"
  },
  {
    id: 4,
    name: "Neo-Noir",
    weapon: "USP-S",
    wear: "Minimal Wear",
    price: 80,
    upgradePrice: 65,
    image: "https://images.unsplash.com/photo-1578598336003-1ef17d574955?w=800&auto=format&fit=crop&q=60",
    float: 0.12,
    stattrak: false,
    souvenir: false,
    category: "pistol",
    rarity: "restricted"
  },
  {
    id: 5,
    name: "Neon Rider",
    weapon: "MP9",
    wear: "Factory New",
    price: 45,
    upgradePrice: 35,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.02,
    stattrak: true,
    souvenir: false,
    category: "smg",
    rarity: "mil-spec"
  }
];