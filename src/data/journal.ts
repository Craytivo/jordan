export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'exhibitions' | 'studio' | 'process' | 'collectors';
  featured: boolean;
  imageUrl: string;
}

export const journalArticles: JournalArticle[] = [
  {
    id: '1',
    slug: 'new-collection-2024',
    title: 'Introducing the 2024 Collection',
    excerpt: 'A new body of work exploring memory, light, and the spaces between moments.',
    content: `The 2024 collection represents a continued exploration of themes that have guided my practice for the past several years. Memory, light, and the emotional resonance of space remain central to this work.

This collection features twelve new pieces, each developed through an extended process of observation, sketching, and layering. The palette has shifted slightly—warmer tones have entered the work, suggesting a different quality of light.

Several pieces in this collection were inspired by specific locations: a coastal morning on the Pacific Northwest, the interior of a 19th-century building, and the quality of light in my studio during late afternoon. These places serve as starting points, but the paintings quickly move beyond representation into something more abstract and personal.

I'm particularly interested in the tension between what is remembered and what is imagined. Each painting in this collection exists in that space—rooted in observation but transformed through the process of making.`,
    date: '2024-03-15',
    category: 'exhibitions',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1800'
  },
  {
    id: '2',
    slug: 'studio-process-layering',
    title: 'On Layering and Restraint',
    excerpt: 'The technical process behind building depth through multiple translucent layers.',
    content: `Layering is fundamental to my process. Each painting typically goes through 15-20 layers of acrylic, each applied thinly and allowed to dry completely before the next is added.

This slow accumulation creates depth that cannot be achieved in a single pass. Color shifts subtly as layers interact—what appears as a warm grey might contain hints of blue, ochre, and rose beneath the surface.

Restraint is equally important. I've learned to stop before a piece feels finished, to leave room for the viewer's own interpretation. The most successful paintings are those that continue to reveal themselves over time, where something new can be discovered with each viewing.

The physicality of the paint matters too. I work with the surface—sometimes scraping back to reveal earlier layers, sometimes building up texture that catches light differently. The painting becomes an object, not just an image.`,
    date: '2024-02-28',
    category: 'process',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507643179173-617d8a6bfa4d?w=1800'
  },
  {
    id: '3',
    slug: 'collector-spotlight-modern-home',
    title: 'Collector Spotlight: A Modern Home',
    excerpt: 'How "Silent Memory I" found its place in a contemporary Edmonton home.',
    content: `It's always meaningful to see a painting in its intended environment—to witness how it interacts with light, architecture, and the daily life of its new home.

"Silent Memory I" was acquired last autumn by a collector in Edmonton. The piece now hangs in a living room with floor-to-ceiling windows that face west. The quality of light in that space changes dramatically throughout the day, and the painting responds to each shift—appearing warm and golden in late afternoon, cool and contemplative in morning light.

The collector described their connection to the work: "It captures something about the way light moves through this house that I hadn't been able to articulate. The painting feels like it belongs here, like it was made for this specific light."

This is what I hope for each piece—that it finds its right place, that it becomes part of the ongoing story of a space.`,
    date: '2024-02-10',
    category: 'collectors',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800'
  },
  {
    id: '4',
    slug: 'studio-day-materials',
    title: 'Studio Day: Materials and Tools',
    excerpt: 'A look at the materials that shape the work.',
    content: `My materials are simple: acrylic paint, canvas or paper, brushes of various sizes, and palette knives. I don't use mediums or additives—just paint, sometimes thinned with water, sometimes applied straight from the tube.

The quality of materials matters. I use professional-grade acrylics with high pigment load. The difference is visible in the depth of color and the way the paint handles. Cheap paint tends to be chalky and flat; good paint has luminosity and body.

Brushes range from wide flats for covering large areas to small rounds for precise marks. I keep many brushes on hand—each has its own character and contributes different qualities to the work.

The studio itself is a material. Light, space, and the accumulated history of previous paintings all influence what happens on the canvas. I've learned to work with these conditions rather than against them.`,
    date: '2024-01-22',
    category: 'studio',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507643179173-617d8a6bfa4d?w=1800'
  },
  {
    id: '5',
    slug: 'exhibition-upcoming-summer',
    title: 'Upcoming Exhibition: Summer 2026',
    excerpt: 'New works will be shown at an Edmonton gallery this summer.',
    content: `I'm pleased to announce a solo exhibition scheduled for summer 2026 at an Edmonton gallery. The exhibition will feature 15-20 new works created specifically for this show.

The exhibition will explore themes of memory and place through a series of large-scale paintings. Several pieces will reference specific locations in Alberta, while others will move into more abstract territory.

This will be my first major solo exhibition in several years, and I'm approaching it with both excitement and the usual mixture of anticipation and uncertainty that comes with bringing new work into the world.

More details—including dates, location, and preview images—will be announced in the coming months. Those on the collector mailing list will receive early access and preview opportunities.`,
    date: '2024-01-08',
    category: 'exhibitions',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800'
  },
  {
    id: '6',
    slug: 'on-commissions-process',
    title: 'The Commission Process',
    excerpt: 'How commissioned work develops from initial conversation to finished piece.',
    content: `Commissions represent a collaborative process—one that begins with conversation and develops through trust and mutual understanding.

When a collector approaches me about a commission, we start by discussing what they're looking for. Sometimes they have a specific vision; other times, the direction emerges through our conversation. We talk about space, light, color preferences, and the emotional quality they hope the piece will have.

I then create preliminary studies—small works that explore possible directions. These aren't meant to be finished pieces but rather starting points for discussion. The collector's response to these studies helps guide the final work.

The actual painting process is similar to my studio practice, but with the added awareness that this piece has a specific destination. I often visit the space where the painting will live, to understand the light and architecture.

The commission process typically takes 3-6 months from initial conversation to delivery. This extended timeline allows for the slow, deliberate approach that my work requires.`,
    date: '2023-12-15',
    category: 'process',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507643179173-617d8a6bfa4d?w=1800'
  },
  {
    id: '7',
    slug: 'winter-studio-reflections',
    title: 'Winter Studio Reflections',
    excerpt: 'How the changing season affects studio practice.',
    content: `Winter brings a different quality to the studio. The light is lower and more directional, the days are shorter, and there's a natural tendency toward interiority.

This seasonal shift influences the work. Colors tend to become more muted, compositions more restrained. The pace of work slows—I spend more time looking, less time painting.

There's value in this seasonal rhythm. The winter paintings often have a different character than those made in summer. They're quieter, more contemplative. They ask different questions of the viewer.

I've learned to work with these seasonal changes rather than against them. Each season brings its own gifts to the studio, and the work is richer for acknowledging these cycles.`,
    date: '2023-12-01',
    category: 'studio',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1507643179173-617d8a6bfa4d?w=1800'
  },
  {
    id: '8',
    slug: 'limited-editions-announcement',
    title: 'Introducing Limited Editions',
    excerpt: 'A new series of archival prints makes the work more accessible.',
    content: `I'm excited to announce the launch of limited edition archival prints, making selected works available at a more accessible price point.

Each print is produced using museum-quality archival inks on heavyweight cotton paper. Editions are limited to 25 copies, each signed and numbered. The prints capture the color and subtlety of the original paintings while offering a different format for collecting.

The first series includes prints of four original works from the 2023 collection. Future releases will feature additional pieces as they become available.

These prints allow collectors who may not be ready to acquire an original piece to still live with the work. They're also an option for those who have collected originals and want to expand their collection in a different format.

All prints are available exclusively through the gallery website and can be shipped worldwide.`,
    date: '2023-11-15',
    category: 'exhibitions',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1800'
  }
];

export const getFeaturedArticles = () => journalArticles.filter(a => a.featured);
export const getArticlesByCategory = (category: JournalArticle['category']) => 
  journalArticles.filter(a => a.category === category);
export const getArticleBySlug = (slug: string) => journalArticles.find(a => a.slug === slug);
