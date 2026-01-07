'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import artworksData from '@/data/artworks.json';
import type { Artwork, ArtworkCategory } from '@/lib/types';
import FilterBar from '@/components/FilterBar';
import ArtworkGrid from '@/components/ArtworkGrid';

export default function WorksPage() {
  const t = useTranslations('works');
  const artworks = artworksData as Artwork[];

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');

  const years = useMemo(() => {
    const uniqueYears = [...new Set(artworks.map((a) => a.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, [artworks]);

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesYear = selectedYear === null || artwork.year === selectedYear;
      const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
      return matchesYear && matchesCategory;
    });
  }, [artworks, selectedYear, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Page Title */}
      <div className="pb-5">
        <h1 className="text-[15px] font-bold uppercase tracking-[1px]">
          {t('title')}
        </h1>
      </div>

      {/* Filter Bar */}
      <FilterBar
        years={years}
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        onYearChange={setSelectedYear}
        onCategoryChange={setSelectedCategory}
      />

      {/* Artwork Grid */}
      <ArtworkGrid artworks={filteredArtworks} />
    </div>
  );
}
