'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-10 mt-20 border-t border-border">
      <p className="text-[13px] text-muted-foreground text-center">
        {t('copyright')}
      </p>
    </footer>
  );
}
