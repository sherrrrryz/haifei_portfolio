'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/lib/types';
import { cn, getImageUrl } from '@/lib/utils';
import LightBox from '@/components/LightBox';

// Fixed featured artwork IDs
const featuredIds = ['oil_010', 'oil_013', 'oil_014'];

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  const artworks = artworksData as Artwork[];

  // Get fixed featured artworks
  const featuredArtworks = featuredIds
    .map(id => artworks.find(a => a.id === id))
    .filter(Boolean) as Artwork[];

  // Cover artwork data
  const coverArtwork = artworks.find(a => a.id === 'oil_012');

  // Cover lightbox state
  const [coverLightboxOpen, setCoverLightboxOpen] = useState(false);

  // Featured works LightBox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFeaturedClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Cover Section */}
      {coverArtwork && (
        <section className="md:mb-20">
          {/* Mobile: Full-screen immersive cover - extends behind nav */}
          <div
            className="md:hidden -mx-6 -mt-[72px] cursor-pointer"
            onClick={() => setCoverLightboxOpen(true)}
          >
            {/* Full height image - auto pan from left to right */}
            <div className="h-[calc(100svh-112px)] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getImageUrl(coverArtwork.imageUrl)}
                alt={locale === 'en' ? t('coverTitle') : coverArtwork.title}
                className="h-full w-auto max-w-none object-cover"
                style={{
                  animation: 'slow-pan 45s linear infinite alternate'
                }}
              />
            </div>
            {/* Title at bottom */}
            <div className="h-[80px] pt-4 px-6">
              <h2 className="text-2xl font-bold tracking-[2px]">
                {t('coverTitle')}
              </h2>
              <p className="text-[13px] text-muted-foreground mt-1">
                {t('coverInfo')}
              </p>
            </div>
          </div>

          {/* Desktop: Original cover layout */}
          <button
            onClick={() => setCoverLightboxOpen(true)}
            className="hidden md:block group w-full text-left cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <Image
                src={getImageUrl(coverArtwork.imageUrl)}
                alt={locale === 'en' ? t('coverTitle') : coverArtwork.title}
                width={1600}
                height={900}
                priority
                className={cn(
                  'w-full h-auto object-cover',
                  'transition-transform duration-[0.4s] ease-out',
                  'group-hover:scale-[1.01]'
                )}
              />
            </div>
            <div className="pt-4">
              <h2 className="text-2xl font-bold tracking-[2px]">
                {t('coverTitle')}
              </h2>
              <p className="text-[13px] text-muted-foreground mt-1">
                {t('coverInfo')}
              </p>
            </div>
          </button>
        </section>
      )}

      {/* About Section */}
      <section className="flex flex-col lg:flex-row lg:items-center gap-[60px] lg:gap-9 mt-16 lg:mt-0 my-[100px] lg:my-[160px]">
        <div className="relative overflow-hidden w-full lg:w-[25%] lg:min-w-[260px] lg:max-w-[320px] flex-shrink-0">
          <Image
            src={getImageUrl('/images/artist-portrait.jpg')}
            alt={locale === 'en' ? 'Xi Haifei' : '郗海飞'}
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[500px]">
          <h2 className="text-[22px] font-bold uppercase tracking-[3px] mb-8">
            {t('aboutArtist')}
          </h2>
          {/* Bio text in muted color */}
          <p className="text-[16px] leading-[1.9] text-muted-foreground mb-8 whitespace-pre-line">
            {t('bioSummary')}
          </p>
          {/* Read more link with underline */}
          <Link
            href={`/${locale}/about`}
            className={cn(
              'text-[13px] font-bold uppercase tracking-[2px]',
              'text-foreground/70 hover:text-foreground',
              'transition-colors duration-300',
              'inline-flex items-center gap-2',
              'border-b-2 border-foreground/30 hover:border-foreground/60',
              'pb-1 self-start'
            )}
          >
            {t('readMore')}
          </Link>
        </div>
      </section>

      {/* Featured Works Section */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-6">
          {t('featuredWorks')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 items-start">
          {featuredArtworks.map((artwork, index) => {
            const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
            return (
              <button
                key={artwork.id}
                onClick={() => handleFeaturedClick(index)}
                className="group block text-left cursor-pointer w-full"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={getImageUrl(artwork.imageUrl)}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={cn(
                        'object-cover',
                        'transition-transform duration-[0.4s] ease-out',
                        'group-hover:scale-[1.02]'
                      )}
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className={cn("text-[18px] leading-[22px] mb-1", locale === 'zh' ? 'font-normal' : 'font-light')}>
                      {title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-[1.4]">
                      {artwork.year > 0 ? `${artwork.year} · ` : ''}{artwork.dimensions}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Cover LightBox */}
      {coverArtwork && (
        <LightBox
          artworks={[coverArtwork]}
          currentIndex={0}
          open={coverLightboxOpen}
          onOpenChange={setCoverLightboxOpen}
          onNavigate={() => {}}
        />
      )}

      {/* Featured Works LightBox */}
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
