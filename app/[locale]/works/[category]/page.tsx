import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import CategoryWorksClient from './CategoryWorksClient';

const VALID_CATEGORIES = ['watercolor', 'oil', 'mural'] as const;

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    VALID_CATEGORIES.map((category) => ({
      locale,
      category,
    }))
  );
}

export default async function CategoryWorksPage({ params }: Props) {
  const { locale, category } = await params;

  if (!VALID_CATEGORIES.includes(category as typeof VALID_CATEGORIES[number])) {
    notFound();
  }

  setRequestLocale(locale);

  return <CategoryWorksClient category={category} />;
}
