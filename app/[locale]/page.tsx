import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

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

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('home');
  const artworks = artworksData as Artwork[];

  // Use date as seed so featured works change daily
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const shuffled = seededShuffle(artworks, seed);
  const featuredArtworks = shuffled.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Featured Works */}
      <section>
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-[46px]">
          {t('featuredWorks')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {featuredArtworks.map((artwork) => {
            const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
            return (
              <Link key={artwork.id} href="/works" className="group block">
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
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
