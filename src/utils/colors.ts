export const getRarityColor = (rarity: string): string => {
  const colors = {
    'consumer': 'text-gray-200', // Consumer Grade (White)
    'industrial': 'text-blue-200', // Industrial Grade (Light Blue)
    'mil-spec': 'text-blue-500', // Mil-spec (Blue)
    'restricted': 'text-purple-500', // Restricted (Purple)
    'classified': 'text-pink-500', // Classified (Pink)
    'covert': 'text-red-500', // Covert (Red)
    'contraband': 'text-amber-500', // Contraband (Gold/Yellow)
  };
  return colors[rarity] || 'text-white';
};