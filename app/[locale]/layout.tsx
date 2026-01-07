import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Sidebar, { SidebarTrigger } from '@/components/Sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';

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
      <body className="antialiased">
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
              {/* Mobile Header */}
              <header className="md:hidden sticky top-0 z-40 flex h-[60px] items-center justify-between border-b border-border bg-background px-5">
                <span className="text-xl font-bold tracking-[2px] uppercase">
                  {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
                </span>
                <SidebarTrigger className="h-6 w-6 hover:bg-transparent">
                  <Menu className="h-6 w-6" />
                </SidebarTrigger>
              </header>
              <main className="p-6">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
