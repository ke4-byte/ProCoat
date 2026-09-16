export interface Artwork {
  id: number;
  title: string;
  category: string;
  medium: string;
  dimensions: string;
  status: "Available" | "Sold" | "Prints Only";
  image: string;
  description: string;
  year: number;
}

export const categories = [
  "All",
  "Original Canvas",
  "Custom Portraits",
  "Murals",
  "Fine Art Prints",
] as const;

export const artworkData: Artwork[] = [
  {
    id: 1,
    title: "Golden Hour Reverie",
    category: "Original Canvas",
    medium: "Oil on Canvas",
    dimensions: '48" × 36"',
    status: "Available",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    description:
      "A contemplative piece exploring the interplay of warm light and shadow, inspired by late afternoon walks through the countryside.",
    year: 2024,
  },
  {
    id: 2,
    title: "Whispers of the Sea",
    category: "Original Canvas",
    medium: "Mixed Media on Canvas",
    dimensions: '36" × 48"',
    status: "Sold",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    description:
      "Layered textures and deep blues evoke the constant motion and mystery of the ocean's edge.",
    year: 2023,
  },
  {
    id: 3,
    title: "Family Portrait in Ochre",
    category: "Custom Portraits",
    medium: "Oil on Linen",
    dimensions: '24" × 30"',
    status: "Available",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    description:
      "A warm, intimate family portrait capturing genuine connection and shared joy.",
    year: 2024,
  },
  {
    id: 4,
    title: "Urban Bloom Mural",
    category: "Murals",
    medium: "Acrylic on Wall",
    dimensions: '12\' × 8\'',
    status: "Prints Only",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "A large-scale mural project bringing botanical elements to an urban courtyard space.",
    year: 2023,
  },
  {
    id: 5,
    title: "Midnight Garden",
    category: "Fine Art Prints",
    medium: "Giclée Print on Archival Paper",
    dimensions: '18" × 24"',
    status: "Available",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    description:
      "Limited edition print of a moonlit garden scene, numbered and signed by the artist.",
    year: 2024,
  },
  {
    id: 6,
    title: "Ethereal Portrait Study",
    category: "Custom Portraits",
    medium: "Charcoal & Oil",
    dimensions: '20" × 16"',
    status: "Sold",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    description:
      "An intimate study capturing the subtle play of light across a contemplative face.",
    year: 2023,
  },
  {
    id: 7,
    title: "Abstract Terrain No. 7",
    category: "Original Canvas",
    medium: "Acrylic & Texture Paste",
    dimensions: '40" × 40"',
    status: "Available",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    description:
      "Bold gestural marks and layered textures create a sense of vast, untamed landscape.",
    year: 2024,
  },
  {
    id: 8,
    title: "Café Corner Mural",
    category: "Murals",
    medium: "Acrylic on Wall",
    dimensions: '10\' × 6\'',
    status: "Prints Only",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    description:
      "A vibrant mural for a local café, celebrating community and the art of slow mornings.",
    year: 2022,
  },
];