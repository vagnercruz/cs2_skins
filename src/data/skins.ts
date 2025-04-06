import { Star, Sun as Gun, PocketKnife as Knife, Music2Icon } from 'lucide-react';

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
  | 'chaveiro'
  | 'musicas';

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
  { id: 'chaveiro', name: 'Chaveiros', icon: Gun },
  { id: 'musicas', name: 'Musicas', icon: Music2Icon }
] as const;

export const skins = [
  {
    id: 1,
    name: "Fever Dream",
    weapon: "AWP",
    wear: "Field-Tested",
    price: 67.27,
    upgradePrice: 53.81,
    image: "https://images2.imgbox.com/a1/ef/l4HOUSLh_o.jpg",
    float: 0.1586,
    pattern: 640,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  },
  {
    id: 2,
    name: "Slate",
    weapon: "AK-47",
    wear: "Minimal Wear",
    price: 32.42,
    upgradePrice: 27.55,
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&auto=format&fit=crop&q=60",
    float: 0.1359,
    stattrak: false,
    souvenir: false,
    category: "rifle",
    rarity: "restricted"
  },
  {
    id: 3,
    name: "Evil Daimyo",
    weapon: "M4A4",
    wear: "Field-Tested",
    price: 30.93,
    upgradePrice: 26.29,
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60",
    float: 0.2147,
    stattrak: true,
    souvenir: false,
    category: "rifle",
    rarity: "restricted"
  },
  {
    id: 4,
    name: "Mecha Industries",
    weapon: "Desert Eagle",
    wear: "Field-Tested",
    price: 26.95,
    upgradePrice: 22.90,
    image: "https://images.unsplash.com/photo-1578598336003-1ef17d574955?w=800&auto=format&fit=crop&q=60",
    float: 0.2195,
    stattrak: false,
    souvenir: false,
    category: "pistol",
    rarity: "classified"
  },
  {
    id: 5,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }

  {
    id: 6,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }

  {
    id: 7,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }

  {
    id: 8,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }

  {
    id: 9,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }

  {
    id: 10,
    name: "Mortis",
    weapon: "AWP",
    wear: "Minimal Wear",
    price: 27.00,
    upgradePrice: 21.60,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: 0.13,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  }
];