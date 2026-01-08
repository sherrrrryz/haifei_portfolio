export interface Artwork {
  id: string;
  title: string;
  titleEn?: string;
  year: number;
  dimensions: string;
  category: 'watercolor' | 'oil' | 'mural';
  imageUrl: string;
}

export type ArtworkCategory = 'all' | 'watercolor' | 'oil' | 'mural';
