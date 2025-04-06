import { Star, Sun as Gun, PocketKnife as Knife, Music2Icon } from 'lucide-react';

export type CategoryId = 
  | 'all' 
  | 'rifle' 
  | 'rifle_precisao' 
  | 'knife' 
  | 'smg' 
  | 'shotgun' 
  | 'luva' 
  | 'pistol' 
  | 'machine gun' 
  | 'sticker' 
  | 'keychain'
  | 'music'
  | 'soldiers';

export const categories = [
  { id: 'all', name: 'Todas', icon: Star },
  { id: 'rifle', name: 'Rifles', icon: Gun },
  { id: 'rifle_precisao', name: 'Rifles de Precisão', icon: Gun },
  { id: 'knife', name: 'Facas', icon: Knife },
  { id: 'smg', name: 'SMGs', icon: Gun },
  { id: 'shotgun', name: 'Escopetas', icon: Gun },
  { id: 'luva', name: 'Luvas', icon: Gun },
  { id: 'pistol', name: 'Pistolas', icon: Gun },
  { id: 'machine gun', name: 'Metralhadoras', icon: Gun },
  { id: 'sticker', name: 'Adesivos', icon: Gun },
  { id: 'keychain', name: 'Chaveiros', icon: Gun },
  { id: 'music', name: 'Musicas', icon: Music2Icon },
  { id: 'soldiers', name: 'Musicas', icon: Music2Icon }
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
  },

  {
    id: 6,
    name: "Phoenix",
    weapon: "Soldado",
    price: 19.58,
    upgradePrice: 15.66,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?w=800&auto=format&fit=crop&q=60",
    float: "Sem float",
    stattrak: false,
    souvenir: false,
    category: "soldiers",
    rarity: "consumer"
  },

  {
    id: 7,
    name: "Kiss♥Love",
    weapon: "Sawed-Off",
    wear: "Field-Tested",
    price: 16.72,
    upgradePrice: 13.37,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLOLLChWde_sBOh-zF_Jn4xlXs80A-Zm2nINWddwNqZQ7VrlS9xOjugZ-0v5jKznQxuCB34CuPmx2pwUYbgZ31p1Q/330x192?allow_animated=1",
    float: 0.29,
    stattrak: false,
    souvenir: false,
    category: "shotgun",
    rarity: "classified"
  },

  {
    id: 8,
    name: "Duality ",
    weapon: "AWP",
    wear: "Field-Tested",
    price: 12.57,
    upgradePrice: 10.05,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJO5dG0m7-Ymfb_NoTck29Y_cg_2e3HrIjwjFWxrhI6Mm30JtOdIQNqaQ2C8lm6x7ztgpK-6s-cwXpm6D5iuygfY0gFfw/330x192?allow_animated=1",
    float: 0.36,
    stattrak: false,
    souvenir: false,
    category: "rifle_precisao",
    rarity: "classified"
  },

  {
    id: 9,
    name: "Torque",
    weapon: "USP-S",
    wear: "Field-Tested",
    price: 12.16,
    upgradePrice: 9.72,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbTWhG5C-8xnteTE8YXghRq2qBZua272cYLHdlRrMw6CqVO5wufu15W5v8_KnXFi7ikm5infyRXhn1gSOcmMOx0M/330x192?allow_animated=1",
    float: 0.30,
    stattrak: true,
    souvenir: false,
    category: "pistol",
    rarity: "mil-spec"
  },

  {
    id: 10,
    name: "Osiris",
    weapon: "PP-Bizon",
    wear: "Well-Worn",
    price: 15.66,
    upgradePrice: 12.52,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLbUkmJE5Yt03LiT9tSn2Ffi80RuYTulI4_BJwI-N1GF_1e6yO7p0Zbq6p7PzyFkpGB8stNPeUOp/330x192?allow_animated=1",
    float: 0.42,
    stattrak: true,
    souvenir: false,
    category: "smg",
    rarity: "restricted"
  }
];