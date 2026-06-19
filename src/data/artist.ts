export interface Artist {
  name: string;
  bio: string;
  portraitUrl: string;
  signatureUrl: string;
  location: string;
  email: string;
  exhibitions: Exhibition[];
  press: Press[];
}

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  location: string;
}

export interface Press {
  year: string;
  publication: string;
  title: string;
  link?: string;
}

export const artist: Artist = {
  name: 'The Jordan Collective',
  bio: `Contemporary abstract artist duo based in Edmonton, Alberta. Their work explores movement, memory, and emotional texture through layered compositions and expressive mark-making.

Each piece begins with observation—a quality of light, a remembered space, a fleeting moment—and evolves through an extended process of layering and refinement. The practice emphasizes process, restraint, and the emotional resonance of color and surface.

The work has been exhibited across Western Canada and collected throughout Canada and the United States.`,
  portraitUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800',
  signatureUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400',
  location: 'Edmonton, Alberta',
  email: 'hello@thejordancreative.com',
  exhibitions: [
    {
      year: '2026',
      title: 'Memory and Light',
      venue: 'Gallery 825',
      location: 'Edmonton, AB'
    },
    {
      year: '2024',
      title: 'Contemporary Abstraction',
      venue: 'Modern Art Gallery',
      location: 'Calgary, AB'
    },
    {
      year: '2023',
      title: 'New Works',
      venue: 'Studio Gallery',
      location: 'Edmonton, AB'
    },
    {
      year: '2022',
      title: 'Western Canadian Painters',
      venue: 'Pacific Art Center',
      location: 'Vancouver, BC'
    },
    {
      year: '2021',
      title: 'Emerging Artists',
      venue: 'New Contemporary Space',
      location: 'Edmonton, AB'
    }
  ],
  press: [
    {
      year: '2024',
      publication: 'Art & Design Monthly',
      title: 'The Quiet Power of Layered Abstraction'
    },
    {
      year: '2023',
      publication: 'Canadian Art Review',
      title: 'Studio Visit: Jordan'
    },
    {
      year: '2023',
      publication: 'Interior Design Weekly',
      title: 'How Contemporary Art Transforms Living Spaces'
    },
    {
      year: '2022',
      publication: 'West Coast Art',
      title: 'Five Artists to Watch'
    }
  ]
};
