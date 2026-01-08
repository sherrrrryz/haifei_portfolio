'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/lib/types';
import ArtworkGrid from '@/components/ArtworkGrid';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 20;

interface CategoryWorksClientProps {
  category: string;
}

export default function CategoryWorksClient({ category }: CategoryWorksClientProps) {
  const t = useTranslations('works');
  const artworks = artworksData as Artwork[];

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Get years for this category only
  const years = useMemo(() => {
    const categoryArtworks = artworks.filter((a) => a.category === category);
    const uniqueYears = [...new Set(categoryArtworks.map((a) => a.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, [artworks, category]);

  const filteredArtworks = useMemo(() => {
    return artworks
      .filter((artwork) => {
        const matchesCategory = artwork.category === category;
        const matchesYear = selectedYear === null || artwork.year === selectedYear;
        return matchesCategory && matchesYear;
      })
      .sort((a, b) => b.year - a.year);
  }, [artworks, category, selectedYear]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear, category]);

  const totalPages = Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE);
  const paginatedArtworks = filteredArtworks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen">
      {/* Year Filter */}
      <div className="flex justify-start pb-[18px]">
        <Select
          value={selectedYear?.toString() ?? ''}
          onValueChange={(value) => setSelectedYear(value === 'all' ? null : Number(value))}
        >
          <SelectTrigger
            className={cn(
              'w-[140px] md:w-[160px] text-sm md:text-lg font-normal uppercase',
              'border-muted-foreground/30 rounded-none',
              'focus:ring-0 focus:ring-offset-0 focus:border-foreground',
              'transition-colors duration-300'
            )}
          >
            <SelectValue placeholder={t('allYears')} />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectItem value="all" className="text-lg font-normal uppercase">
              {t('allYears')}
            </SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()} className="text-lg">
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
