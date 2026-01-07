import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/lib/types';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('home');
  const artworks = artworksData as Artwork[];
  const featuredArtworks = artworks.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-5 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-[4px] uppercase mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-[#999] mb-10">
          {t('subtitle')}
        </p>
        <Link
          href="/works"
          className="text-[15px] font-bold uppercase border border-black px-8 py-3 transition-all duration-300 hover:bg-black hover:text-white"
        >
          {t('viewWorks')}
        </Link>
      </section>

      {/* Featured Works */}
      <section className="px-5 md:px-10 pb-20">
        <h2 className="text-[15px] font-bold uppercase tracking-[1px] mb-10 text-center">
          {t('featuredWorks')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {featuredArtworks.map((artwork) => {
            const title = locale === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
            return (
              <Link key={artwork.id} href="/works" className="group block">
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
                  <p className="text-[13px] text-[#999]">
                    {artwork.year}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
