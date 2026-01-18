import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'zh' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <SidebarProvider
            defaultOpen={true}
            style={{
              '--sidebar-width': '260px',
              '--sidebar-width-mobile': '100vw',
            } as React.CSSProperties}
          >
            <Sidebar />
            <SidebarInset className="min-h-screen">
              <MobileHeader locale={locale} />
              <main className="p-4 pt-[72px] md:p-6 md:pt-6">
                <PageTransition>
                  {children}
                </PageTransition>
                <Footer />
              </main>
            </SidebarInset>
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
