'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import type { Artwork } from '@/lib/types';

interface LightBoxProps {
  artworks: Artwork[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightBox({
  artworks,
  currentIndex,
  onClose,
  onNavigate,
}: LightBoxProps) {
  const t = useTranslations('artwork');
  const locale = useLocale();
  const artwork = artworks[currentIndex];
  const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1;
    onNavigate(newIndex);
  }, [currentIndex, artworks.length, onNavigate]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  }, [currentIndex, artworks.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 bg-white/98 z-[1000] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-2xl cursor-pointer hover:text-[#999] transition-colors z-10"
        aria-label={t('close')}
      >
        ✕
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 text-3xl cursor-pointer hover:text-[#999] transition-colors p-5"
        aria-label={t('prev')}
      >
        ←
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 text-3xl cursor-pointer hover:text-[#999] transition-colors p-5"
        aria-label={t('next')}
      >
        →
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={artwork.imageUrl}
          alt={title}
          width={1200}
          height={900}
          className="max-w-full max-h-[75vh] object-contain"
          priority
        />
      </div>

      {/* Info */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-[15px] font-bold uppercase mb-2">{title}</h2>
        <p className="text-[13px] text-[#999]">
          {artwork.year} · {artwork.dimensions}
        </p>
        <p className="text-[12px] text-[#999] mt-2">
          {currentIndex + 1} / {artworks.length}
        </p>
      </div>
    </div>
  );
}
