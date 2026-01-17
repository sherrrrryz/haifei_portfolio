import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { artistInfo } from '@/data/artist';
import { getImageUrl } from '@/lib/utils';

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
    <div className="min-h-screen max-w-[800px]">
      {/* Artist Portrait */}
      <section className="mb-12">
        <div className="w-full max-w-[320px]">
          <Image
            src={getImageUrl('/images/artist-portrait.jpg')}
            alt={locale === 'en' ? 'Xi Haifei' : '郗海飞'}
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
          />
        </div>
      </section>

      {/* Biography */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('biography')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.biography[lang]}
        </div>
      </section>

      {/* Exhibitions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('exhibitions')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.exhibitions[lang]}
        </div>
      </section>

      {/* Jury */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('jury')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.jury[lang]}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('awards')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.awards[lang]}
        </div>
      </section>

      {/* Mural Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('muralProjects')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.muralProjects[lang]}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold uppercase tracking-[2px] mb-5">
          {t('publicationsTitle')}
        </h2>
        <div className="text-[15px] leading-[1.8] text-[#333]">
          {artistInfo.publications[lang]}
        </div>
      </section>
    </div>
  );
}
