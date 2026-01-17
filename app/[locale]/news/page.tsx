import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { collectionItems } from '@/data/news';
import NewsSection from '@/components/NewsSection';

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
      <NewsSection locale={locale} />

      {/* Institutional Collections Section */}
      <section>
        <div className="flex items-center justify-between pb-2 mb-6">
          <h2 className="text-2xl font-bold">
            {t('collections')}
          </h2>
        </div>

        <ul className="space-y-3">
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
