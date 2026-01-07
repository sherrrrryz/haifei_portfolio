'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Artwork } from '@/lib/types';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const locale = useLocale();
  const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;

  return (
    <article
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <Image
          src={artwork.imageUrl}
          alt={title}
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover transition-transform duration-[0.4s] ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-[15px] font-bold uppercase leading-[19px] mb-1">
          {title}
        </h3>
        <p className="text-[13px] text-[#999] leading-[1.4]">
          {artwork.year} · {artwork.dimensions}
        </p>
      </div>
    </article>
  );
}
