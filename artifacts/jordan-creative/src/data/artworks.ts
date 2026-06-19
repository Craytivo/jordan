export interface Artwork {
  id: string;
  title: string;
  price: number;
  medium: string;
  dimensions: string;
  year: number;
  availability: 'available' | 'sold' | 'reserved';
  category: 'original' | 'limited-edition' | 'study';
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Silent Memory I',
    price: 4800,
    medium: 'Acrylic on Canvas',
    dimensions: '48 × 36 in',
    year: 2024,
    availability: 'available',
    category: 'original',
    description: 'An exploration of quiet moments and the textures of memory. Layered acrylic creates depth and movement within a restrained palette.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1800',
    featured: true
  },
  {
    id: '2',
    title: 'Ephemeral Light',
    price: 6200,
    medium: 'Acrylic on Canvas',
    dimensions: '60 × 48 in',
    year: 2024,
    availability: 'available',
    category: 'original',
    description: 'Capturing the transient quality of light as it moves across surfaces. This piece explores the boundary between presence and absence.',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1800',
    featured: true
  },
  {
    id: '3',
    title: 'Interior Study No. 7',
    price: 3400,
    medium: 'Acrylic on Canvas',
    dimensions: '36 × 36 in',
    year: 2023,
    availability: 'available',
    category: 'original',
    description: 'A study of domestic space and the emotional resonance of familiar environments. The composition invites quiet contemplation.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1800',
    featured: false
  },
  {
    id: '4',
    title: 'Portrait Fragment',
    price: 5200,
    medium: 'Acrylic on Canvas',
    dimensions: '40 × 30 in',
    year: 2024,
    availability: 'available',
    category: 'original',
    description: 'An abstract portrait that suggests identity through gesture and mark rather than representation. The piece questions how we recognize ourselves.',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1800',
    featured: false
  },
  {
    id: '5',
    title: 'Coastal Memory',
    price: 7800,
    medium: 'Acrylic on Canvas',
    dimensions: '72 × 48 in',
    year: 2024,
    availability: 'sold',
    category: 'original',
    description: 'A large-scale work inspired by coastal landscapes and the emotional weight of place. The horizontal format emphasizes horizon and distance.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1800',
    featured: false
  },
  {
    id: '6',
    title: 'Untitled (Grey)',
    price: 4200,
    medium: 'Acrylic on Canvas',
    dimensions: '48 × 40 in',
    year: 2023,
    availability: 'available',
    category: 'original',
    description: 'A meditation on the color grey and its associations with memory, distance, and the subconscious. Multiple layers create subtle variations.',
    imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1800',
    featured: false
  },
  {
    id: '7',
    title: 'Evening Threshold',
    price: 5500,
    medium: 'Acrylic on Canvas',
    dimensions: '54 × 44 in',
    year: 2024,
    availability: 'reserved',
    category: 'original',
    description: 'Exploring the liminal space between day and night. The warm palette suggests the transition from activity to rest.',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1800',
    featured: false
  },
  {
    id: '8',
    title: 'Study in Grey',
    price: 2800,
    medium: 'Acrylic on Paper',
    dimensions: '24 × 18 in',
    year: 2023,
    availability: 'available',
    category: 'study',
    description: 'A smaller work exploring the emotional range of grey. This study informed larger pieces but stands as a complete meditation on restraint.',
    imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1800',
    featured: false
  },
  {
    id: '9',
    title: 'Composition IV',
    price: 850,
    medium: 'Archival Print',
    dimensions: '24 × 20 in',
    year: 2024,
    availability: 'available',
    category: 'limited-edition',
    description: 'Limited edition archival print of an original composition. Edition of 25, signed and numbered.',
    imageUrl: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1800',
    featured: false
  },
  {
    id: '10',
    title: 'Still Life with Memory',
    price: 3900,
    medium: 'Acrylic on Canvas',
    dimensions: '42 × 32 in',
    year: 2024,
    availability: 'available',
    category: 'original',
    description: 'A contemporary take on still life, where objects serve as vessels for memory and association rather than mere representation.',
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1800',
    featured: false
  },
  {
    id: '11',
    title: 'Winter Light',
    price: 6500,
    medium: 'Acrylic on Canvas',
    dimensions: '60 × 48 in',
    year: 2023,
    availability: 'sold',
    category: 'original',
    description: 'Capturing the specific quality of winter light and its emotional resonance. The cool palette creates a sense of quiet introspection.',
    imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=1800',
    featured: false
  },
  {
    id: '12',
    title: 'Gesture Study No. 3',
    price: 2400,
    medium: 'Acrylic on Paper',
    dimensions: '30 × 22 in',
    year: 2024,
    availability: 'available',
    category: 'study',
    description: 'An exploration of gesture and movement within a constrained format. The piece demonstrates how minimal marks can convey emotional weight.',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1800',
    featured: false
  }
];

export const getFeaturedArtworks = () => artworks.filter(a => a.featured);
export const getAvailableArtworks = () => artworks.filter(a => a.availability === 'available');
export const getSoldArtworks = () => artworks.filter(a => a.availability === 'sold');
export const getArtworksByCategory = (category: Artwork['category']) => 
  artworks.filter(a => a.category === category);
export const getArtworkById = (id: string) => artworks.find(a => a.id === id);
