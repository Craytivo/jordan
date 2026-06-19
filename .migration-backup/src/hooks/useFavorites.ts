import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (artworkId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(artworkId)
        ? prev.filter((id) => id !== artworkId)
        : [...prev, artworkId];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (artworkId: string) => favorites.includes(artworkId);

  return { favorites, toggleFavorite, isFavorite };
}
