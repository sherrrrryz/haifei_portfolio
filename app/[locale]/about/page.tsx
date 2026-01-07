import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { artistInfo } from '@/data/artist';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent locale={locale} />;
}

function AboutContent({ locale }: { locale: string }) {
  const t = useTranslations('about');
  const lang = locale as 'zh' | 'en';

  return (
    <div className="min-h-screen px-5 md:px-10 py-10 md:py-16 max-w-[800px]">
      {/* Title */}
      <h1 className="text-[15px] font-bold uppercase tracking-[1px] mb-10">
        {t('title')}
      </h1>

      {/* Biography */}
      <section className="mb-12">
        <h2 className="text-[15px] font-bold uppercase tracking-[1px] mb-5">
          {t('biography')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333] whitespace-pre-line">
          {artistInfo.biography[lang]}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-12">
        <h2 className="text-[15px] font-bold uppercase tracking-[1px] mb-5">
          {t('awards')}
        </h2>
        <ul className="space-y-3">
          {artistInfo.awards.map((award, index) => (
            <li key={index} className="text-[14px] leading-[1.6] text-[#333]">
              • {award[lang]}
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-[15px] font-bold uppercase tracking-[1px] mb-5">
          {t('timeline')}
        </h2>
        <ul className="space-y-4">
          {artistInfo.timeline.map((item, index) => (
            <li key={index} className="flex text-[14px] leading-[1.6]">
              <span className="w-[80px] flex-shrink-0 font-bold">
                {item.year}
              </span>
              <span className="text-[#333]">{item[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
