'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import type { Artwork } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';

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
  const t = useTranslations('artwork');
  const locale = useLocale();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(currentIndex);

  const artwork = artworks[current];
  const title = artwork
    ? locale === 'en' && artwork.titleEn
      ? artwork.titleEn
      : artwork.title
    : '';

  // Sync carousel with external currentIndex
  useEffect(() => {
    if (api && open) {
      api.scrollTo(currentIndex, true);
      setCurrent(currentIndex);
    }
  }, [api, currentIndex, open]);

  // Listen to carousel slide changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrent(index);
      onNavigate(index);
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onNavigate]);

  // Handle keyboard navigation for Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    },
    [onOpenChange]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);

  if (!artwork) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'max-w-[95vw] max-h-[95vh] w-full h-full p-0',
          'bg-white/98 border-none rounded-none',
          'flex flex-col items-center justify-center',
          '[&>button]:hidden' // Hide default close button
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {t('viewingArtwork')} {current + 1} / {artworks.length}
          </DialogDescription>
        </VisuallyHidden>

        {/* Custom Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onOpenChange(false)}
          className="absolute top-8 right-8 z-10 hover:bg-transparent hover:text-muted-foreground"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">{t('close')}</span>
        </Button>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            startIndex: currentIndex,
            loop: true,
          }}
          className="w-full max-w-[90vw] mx-auto"
        >
          <CarouselContent className="-ml-0">
            {artworks.map((item, index) => {
              const itemTitle =
                locale === 'en' && item.titleEn ? item.titleEn : item.title;
              return (
                <CarouselItem key={item.id} className="pl-0 flex flex-col items-center justify-center">
                  <div className="relative w-full flex items-center justify-center">
                    <Image
                      src={item.imageUrl}
                      alt={itemTitle}
                      width={1200}
                      height={900}
                      className="max-w-full max-h-[70vh] object-contain"
                      priority={index === current}
                    />
                  </div>
                  {/* Info */}
                  <div className="text-center mt-6">
                    <h2 className="text-[15px] font-bold uppercase mb-2">{itemTitle}</h2>
                    <p className="text-[13px] text-muted-foreground">
                      {item.year} · {item.dimensions}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              'left-5 md:left-8 -translate-y-1/2',
              'h-12 w-12 rounded-none border-none',
              'hover:bg-transparent hover:text-muted-foreground',
              'disabled:opacity-30'
            )}
            variant="ghost"
          />
          <CarouselNext
            className={cn(
              'right-5 md:right-8 -translate-y-1/2',
              'h-12 w-12 rounded-none border-none',
              'hover:bg-transparent hover:text-muted-foreground',
              'disabled:opacity-30'
            )}
            variant="ghost"
          />
        </Carousel>

        {/* Counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <p className="text-[12px] text-muted-foreground">
            {current + 1} / {artworks.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
