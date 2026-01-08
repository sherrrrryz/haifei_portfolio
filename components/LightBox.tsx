'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Artwork } from '@/lib/types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface LightBoxProps {
  artworks: Artwork[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

export default function LightBox({
  artworks,
  currentIndex,
  open,
  onOpenChange,
  onNavigate,
}: LightBoxProps) {
  const locale = useLocale();
  const artwork = artworks[currentIndex];
  const title = artwork
    ? locale === 'en' && artwork.titleEn
      ? artwork.titleEn
      : artwork.title
    : '';

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, artworks.length, onNavigate]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, artworks.length, onNavigate]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    },
    [onOpenChange, goToPrevious, goToNext]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [open, handleKeyDown]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className={cn(
              'absolute top-0 right-0 z-10',
              'w-[65px] h-[65px] flex items-center justify-center',
              'text-foreground/35 hover:text-foreground/70',
              'transition-colors duration-300'
            )}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 z-10',
              'w-[50px] h-[100px] flex items-center justify-center',
              'text-foreground/35 hover:text-foreground/70',
              'transition-colors duration-300'
            )}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 z-10',
              'w-[50px] h-[100px] flex items-center justify-center',
              'text-foreground/35 hover:text-foreground/70',
              'transition-colors duration-300'
            )}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Content */}
          <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-[50px] py-[65px] md:px-[5vw]">
            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 h-full flex items-center justify-center"
            >
              <Image
                src={artwork.imageUrl}
                alt={title}
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </motion.div>

            {/* Info */}
            <div className={cn(
              'mt-6 md:mt-0 md:ml-10',
              'md:w-[200px] md:flex-shrink-0',
              'text-center md:text-left'
            )}>
              <h2 className="text-[15px] font-bold uppercase mb-2">{title}</h2>
              <p className="text-[13px] text-muted-foreground leading-[1.6]">
                {artwork.year}
                <br />
                {artwork.dimensions}
              </p>
              <p className="text-[12px] text-muted-foreground mt-4">
                {currentIndex + 1} / {artworks.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
