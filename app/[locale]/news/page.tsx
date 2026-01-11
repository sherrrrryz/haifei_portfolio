import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { newsItems, collectionItems } from '@/data/news';
import { Separator } from '@/components/ui/separator';
import { getImageUrl } from '@/lib/utils';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NewsContent locale={locale} />;
}

function NewsContent({ locale }: { locale: string }) {
  const t = useTranslations('news');
  const lang = locale as 'zh' | 'en';

  return (
    <div className="min-h-screen max-w-[900px]">
      {/* Artist News Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between border-b-2 border-foreground pb-2 mb-6">
          <h2 className="text-[17px] font-bold">
            {t('artistNews')}
          </h2>
        </div>

        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <div key={item.id}>
              <article className="py-6">
                <div className="flex gap-6">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <div className="relative w-[140px] h-[100px]">
                      <Image
                        src={getImageUrl(item.imageUrl)}
                        alt={item.title[lang]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold mb-2 leading-[1.4]">
                      {item.title[lang]}
                    </h3>
                    <p className="text-[13px] text-[#333] leading-[1.8] line-clamp-3">
                      {item.summary[lang]}
                    </p>
                  </div>
                </div>
              </article>
              {index < newsItems.length - 1 && (
                <Separator />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Collections Section */}
      <section>
        <div className="flex items-center justify-between border-b-2 border-foreground pb-2 mb-6">
          <h2 className="text-[17px] font-bold">
            {t('collections')}
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {collectionItems.map((item) => (
            <li key={item.id} className="text-[14px] leading-[1.6]">
              <span className="text-muted-foreground">{item.year}年</span>
              {' '}
              <span>{item.artworkType[lang]}</span>
              {' '}
              <span>《{item.artworkTitle[lang]}》</span>
              {' '}
              <span className="text-muted-foreground">{t('collectedBy')}</span>
              <span>{item.collector[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
