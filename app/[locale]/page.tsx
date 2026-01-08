'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import LightBox from '@/components/LightBox';

// Seeded random shuffle to ensure consistency between server/client
function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;

  const random = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get today's seed - this ensures consistency within a day
function getTodaySeed(): number {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  const artworks = artworksData as Artwork[];

  // Use date as seed so featured works change daily
  const [seed] = useState(() => getTodaySeed());
  const shuffled = seededShuffle(artworks, seed);
  const featuredArtworks = shuffled.slice(0, 6);

  // LightBox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Featured Works */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-[46px]">
          {t('featuredWorks')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {featuredArtworks.map((artwork, index) => {
            const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
            return (
              <button
                key={artwork.id}
                onClick={() => handleImageClick(index)}
                className="group block text-left cursor-pointer"
              >
                <Card className="border-none shadow-none rounded-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={artwork.imageUrl}
                        alt={title}
                        width={800}
                        height={600}
                        className={cn(
                          'w-full aspect-[4/3] object-cover',
                          'transition-transform duration-[0.4s] ease-out',
                          'group-hover:scale-[1.02]'
                        )}
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-[15px] font-bold uppercase leading-[19px] mb-1">
                        {title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-[1.4]">
                        {artwork.year} · {artwork.dimensions}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      </section>

      {/* LightBox for viewing images */}
      <LightBox
        artworks={featuredArtworks}
        currentIndex={currentIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}
