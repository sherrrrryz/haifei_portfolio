'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Artwork } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn, getImageUrl } from '@/lib/utils';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const locale = useLocale();
  const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;

  return (
    <Card
      className={cn(
        'group cursor-pointer border-none shadow-none rounded-none bg-transparent',
        'transition-transform duration-300'
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={getImageUrl(artwork.imageUrl)}
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
          <h3 className="text-[18px] font-light leading-[22px] mb-1">
            {title}
          </h3>
          <p className="text-[13px] text-muted-foreground leading-[1.4]">
            {artwork.year} · {artwork.dimensions}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
