import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { publications } from '@/data/publications';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PublicationsContent locale={locale} />;
}

function PublicationsContent({ locale }: { locale: string }) {
  const t = useTranslations('publications');
  const lang = locale as 'zh' | 'en';

  return (
    <div className="min-h-screen max-w-[900px]">
      {publications.map((pub, index) => (
        <div key={pub.id}>
          {/* Book Entry */}
          <article className="py-8">
            {/* Top Section: Cover + Details */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Cover Image */}
              <div className="flex-shrink-0">
                <Image
                  src={pub.coverUrl}
                  alt={pub.title[lang]}
                  width={300}
                  height={375}
                  className="w-[250px] md:w-[300px] h-auto object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-[17px] font-bold mb-4">
                  {pub.title[lang]}
                </h2>
                <dl className="space-y-1 text-[14px]">
                  {pub.publisher[lang] && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('publisher')}
                      </dt>
                      <dd>{pub.publisher[lang]}</dd>
                    </div>
                  )}
                  {pub.author[lang] && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('author')}
                      </dt>
                      <dd>{pub.author[lang]}</dd>
                    </div>
                  )}
                  {pub.publishDate && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('publishDate')}
                      </dt>
                      <dd>{pub.publishDate}</dd>
                    </div>
                  )}
                  {pub.format[lang] && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('format')}
                      </dt>
                      <dd>{pub.format[lang]}</dd>
                    </div>
                  )}
                  {pub.printRun[lang] && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('printRun')}
                      </dt>
                      <dd>{pub.printRun[lang]}</dd>
                    </div>
                  )}
                  {pub.category[lang] && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('category')}
                      </dt>
                      <dd>{pub.category[lang]}</dd>
                    </div>
                  )}
                  {pub.price && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        {t('price')}
                      </dt>
                      <dd>{pub.price}</dd>
                    </div>
                  )}
                  {pub.isbn && (
                    <div className="flex">
                      <dt className="w-[80px] flex-shrink-0 text-muted-foreground">
                        ISBN
                      </dt>
                      <dd>{pub.isbn}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            {/* Summary Section */}
            {pub.summary[lang] && (
              <div className="mt-8">
                <h3 className="text-[15px] font-bold mb-3">
                  {t('summary')}
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#333] whitespace-pre-line">
                  {pub.summary[lang]}
                </p>
              </div>
            )}
          </article>

          {/* Separator between books */}
          {index < publications.length - 1 && (
            <Separator className="my-4" />
          )}
        </div>
      ))}
    </div>
  );
}
