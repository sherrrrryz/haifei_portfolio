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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const openLightBox = (index: number) => {
    setSelectedIndex(index);
    setIsLightBoxOpen(true);
  };

  if (artworks.length === 0) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        {t('noWorks')}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 pt-6">
        {artworks.map((artwork, index) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            onClick={() => openLightBox(index)}
          />
        ))}
      </div>

      <LightBox
        artworks={artworks}
        currentIndex={selectedIndex}
        open={isLightBoxOpen}
        onOpenChange={setIsLightBoxOpen}
        onNavigate={setSelectedIndex}
      />
    </>
  );
}
