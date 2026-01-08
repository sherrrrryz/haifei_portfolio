'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import artworksData from '@/data/artworks.json';
import type { Artwork, ArtworkCategory } from '@/lib/types';
import FilterBar from '@/components/FilterBar';
import ArtworkGrid from '@/components/ArtworkGrid';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 20;

export default function WorksPage() {
  const t = useTranslations('works');
  const artworks = artworksData as Artwork[];

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(artworks.map((a) => a.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, [artworks]);

  const filteredArtworks = useMemo(() => {
    return artworks
      .filter((artwork) => {
        const matchesYear = selectedYear === null || artwork.year === selectedYear;
        const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
        return matchesYear && matchesCategory;
      })
      .sort((a, b) => b.year - a.year);
  }, [artworks, selectedYear, selectedCategory]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear, selectedCategory]);

  const totalPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);
  const paginatedArtworks = filteredArtworks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen">
      {/* Filter Bar */}
      <FilterBar
        years={years}
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        onYearChange={setSelectedYear}
        onCategoryChange={setSelectedCategory}
      />

      {/* Artwork Grid */}
      <ArtworkGrid artworks={paginatedArtworks} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-none"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
