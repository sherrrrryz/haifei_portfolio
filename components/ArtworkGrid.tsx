'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Artwork } from '@/lib/types';
import ArtworkCard from './ArtworkCard';
import LightBox from './LightBox';

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const t = useTranslations('works');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (artworks.length === 0) {
    return (
      <div className="text-center py-20 text-[#999]">
        {t('noWorks')}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 md:p-10">
        {artworks.map((artwork, index) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <LightBox
          artworks={artworks}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
}
